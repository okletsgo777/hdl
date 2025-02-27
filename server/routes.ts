import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getWaitlistByEmail(data.email);
      if (existing) {
        return res.status(400).json({ 
          message: "This email is already on the waitlist" 
        });
      }

      const entry = await storage.insertWaitlist(data);
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ 
          message: fromZodError(error).message 
        });
      } else {
        res.status(500).json({ 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
