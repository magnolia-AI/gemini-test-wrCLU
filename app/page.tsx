"use client";
import ProductGrid from "@/components/ProductGrid";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Classic Fedora",
      description: "A timeless felt fedora for a sophisticated look.",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1521115206943-b77826241b71?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      name: "Summer Straw Hat",
      description: "Lightweight and breathable, perfect for sunny days.",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1514327605112-b8782bff1c30?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "Urban Beanie",
      description: "Cozy and stylish, ideal for urban adventures.",
      price: "$30.00",
      image: "https://images.unsplash.com/photo-1576871337037-88f247c0396f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      name: "Vintage Newsboy Cap",
      description: "A classic cap with a retro charm.",
      price: "$55.00",
      image: "https://images.unsplash.com/photo-1588806558190-c081d394142d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "5",
      name: "Sporty Baseball Cap",
      description: "Casual and comfortable, great for everyday wear.",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1577237571121-b04421937a0a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "6",
      name: "Elegant Sun Hat",
      description: "Wide-brimmed and elegant, perfect for beach days.",
      price: "$60.00",
      image: "https://images.unsplash.com/photo-1534215754734-18e55e24a4ad?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "7",
      name: "Adventure Boonie Hat",
      description: "Rugged and durable, ideal for outdoor adventures.",
      price: "$40.00",
      image: "https://images.unsplash.com/photo-1607083206968-fd0891572976?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "8",
      name: "Cozy Trapper Hat",
      description: "Warm and fuzzy, perfect for cold weather.",
      price: "$50.00",
      image: "https://images.unsplash.com/photo-1563297007-06161749507f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <motion.header 
        className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          HatStore
        </motion.h1>
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://github.com/smol-ai/tool-user" target="_blank">
              <Button variant="outline" className="flex items-center space-x-2">
                <GithubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </Button>
            </Link>
          </motion.div>
          <ThemeToggle />
        </div>
      </motion.header>

      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.section 
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            Welcome to <span className="text-primary">HatStore</span>!
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          >
            Discover our curated collection of stylish hats. We have something for every head and occasion.
          </motion.p>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }} // Delay this section slightly after the hero
        >
          <ProductGrid products={products} />
        </motion.section>
      </main>

      <motion.footer 
        className="text-center mt-20 py-10 border-t border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} // Delay footer animation
      >
        <p className="text-muted-foreground text-sm mb-2">
          &copy; {new Date().getFullYear()} HatStore. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          "Wear your confidence."
        </p>
      </motion.footer>
    </div>
  );
}

