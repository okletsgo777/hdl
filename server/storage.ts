import { type Waitlist, type InsertWaitlist } from "@shared/schema";

export interface IStorage {
  insertWaitlist(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
  }

  async insertWaitlist(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentId++;
    const waitlistEntry = { ...entry, id };
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email === email
    );
  }
}

export const storage = new MemStorage();
