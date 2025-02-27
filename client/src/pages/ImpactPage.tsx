import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Leaf, Recycle, TreePine } from "lucide-react";

const impactStats = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "CO₂ Reduction",
    value: "1,200+",
    unit: "tons",
    description: "Carbon emissions saved through furniture reuse",
  },
  {
    icon: <Recycle className="h-8 w-8" />,
    title: "Furniture Recycled",
    value: "5,000+",
    unit: "pieces",
    description: "Items given a second life through our program",
  },
  {
    icon: <TreePine className="h-8 w-8" />,
    title: "Trees Saved",
    value: "10,000+",
    unit: "trees",
    description: "Protected through reduced furniture production",
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Environmental Impact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            By choosing Handle, you're contributing to a more sustainable future.
            Here's how our circular economy model makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 text-center">
                <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                  <span className="text-sm ml-1 text-muted-foreground">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-muted-foreground">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="prose prose-lg mx-auto">
          <h2>Our Commitment to Sustainability</h2>
          <p>
            At Handle, we're committed to reducing waste and promoting sustainable
            consumption. Our furniture leasing model helps reduce the demand for new
            furniture production while ensuring quality pieces get multiple lives
            through our refurbishment program.
          </p>
          <h2>How We Make a Difference</h2>
          <ul>
            <li>Quality inspection and refurbishment of all furniture</li>
            <li>Partnerships with local repair workshops</li>
            <li>Sustainable packaging and delivery methods</li>
            <li>Support for local environmental initiatives</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
