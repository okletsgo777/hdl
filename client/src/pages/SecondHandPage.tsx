import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

const furniture = [
  {
    name: "Vintage Leather Sofa",
    price: "€599",
    condition: "Excellent",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    description: "Classic brown leather sofa, minimal wear, perfect for any living room.",
  },
  {
    name: "Wooden Dining Table",
    price: "€299",
    condition: "Very Good",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
    description: "Solid oak dining table, seats 6, some minor scratches.",
  },
  {
    name: "Modern Armchair",
    price: "€249",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254",
    description: "Contemporary design armchair, barely used, perfect condition.",
  },
];

export default function SecondHandPage() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Second-Hand Furniture</h1>
          <p className="text-xl text-muted-foreground">
            Quality pre-loved furniture at great prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furniture.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-sm">{item.condition}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Button className="w-full">View Details</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
