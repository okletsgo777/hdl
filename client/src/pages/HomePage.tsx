import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { PackageOpen, Leaf, Calendar, Users } from "lucide-react";

const features = [
  {
    icon: <PackageOpen className="h-8 w-8" />,
    title: "Quality Selection",
    description: "Choose from our curated collection of premium furniture pieces.",
    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustainable Living",
    description: "Reduce waste and environmental impact through furniture leasing.",
    image: "https://images.unsplash.com/photo-1559273514-468728ffc16c",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Flexible Terms",
    description: "Lease for as long as you need, with easy renewal options.",
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4",
  },
];

export default function HomePage() {
  const { toast } = useToast();
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InsertWaitlist) =>
      apiRequest("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Furniture Leasing Made Simple
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Subscribe to quality furniture without the commitment. Create your perfect space with Handle - sustainable, flexible, and budget-friendly solutions for your home.
              </p>
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  Join 1,000+ people already on our waitlist
                </span>
              </div>
            </div>
            <div className="lg:pl-12">
              <Card className="p-6 backdrop-blur-sm bg-background/95">
                <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                    className="space-y-4"
                  >
                    <div>
                      <Input
                        placeholder="Your name"
                        {...form.register("name")}
                        className="w-full"
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email"
                        {...form.register("email")}
                        className="w-full"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Handle?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of furniture with our innovative leasing platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="p-6">
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
