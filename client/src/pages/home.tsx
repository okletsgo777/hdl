import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import WaitlistForm from "@/components/waitlist-form";
import FeatureCard from "@/components/feature-card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["/api/waitlist/count"],
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                The Next Generation Platform
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Join the waitlist to be among the first to experience our revolutionary product.
                {data?.count > 0 && (
                  <span className="font-semibold"> Join {data.count} others waiting to get early access!</span>
                )}
              </p>
              <div className="mt-8">
                <WaitlistForm />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1547444196-2ea3ce201cc6"
                alt="Platform Preview"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Lightning Fast"
              description="Experience unmatched speed and performance with our cutting-edge technology."
              imageUrl="https://images.unsplash.com/photo-1506729623306-b5a934d88b53"
            />
            <FeatureCard
              title="Secure & Reliable"
              description="Bank-grade security ensuring your data is always protected."
              imageUrl="https://images.unsplash.com/photo-1559273514-468728ffc16c"
            />
            <FeatureCard
              title="24/7 Support"
              description="Our dedicated team is always here to help you succeed."
              imageUrl="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't miss out on the opportunity to be among the first to experience the future.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Join the Waitlist <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
