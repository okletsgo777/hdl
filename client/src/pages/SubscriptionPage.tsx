import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Home, Bed, HomeIcon } from "lucide-react";

const subscriptionPlans = [
  {
    name: "Studio",
    icon: <Home className="h-6 w-6" />,
    price: "€99",
    description: "Perfect for a small apartment",
    features: [
      "Basic furniture set",
      "Free delivery & setup",
      "12-month minimum term",
      "Monthly maintenance check",
    ],
  },
  {
    name: "Apartment",
    icon: <Bed className="h-6 w-6" />,
    price: "€199",
    description: "Ideal for a 1-2 bedroom home",
    features: [
      "Complete furniture set",
      "Priority delivery & setup",
      "6-month minimum term",
      "Bi-weekly maintenance",
    ],
  },
  {
    name: "House",
    icon: <HomeIcon className="h-6 w-6" />,
    price: "€299",
    description: "Perfect for larger homes",
    features: [
      "Premium furniture selection",
      "VIP delivery & setup",
      "Flexible terms",
      "Weekly maintenance",
    ],
  },
];

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground">
            Flexible furniture subscriptions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="mb-4 text-primary">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-primary mb-4">
                  {plan.price}
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Select Plan</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}