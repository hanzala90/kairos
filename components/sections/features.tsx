"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Zap, Layers } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: TrendingUp,
    title: "Moon Mission Ready",
    description: "Proprietary algorithm that's ready to take us straight to the moon! 🚀",
    gradient: "from-[#ff00ff] to-[#00ff00]",
  },
  {
    icon: Shield,
    title: "Diamond Hand Security",
    description: "HODL with confidence! Multi-layered protection for true diamond hands. 💎",
    gradient: "from-[#00ff00] to-[#ff00ff]",
  },
  {
    icon: Zap,
    title: "Zoom Zoom Fast",
    description: "Lightning-fast transactions that'll make your head spin! ⚡",
    gradient: "from-[#ff00ff] to-[#00ff00]",
  },
  {
    icon: Layers,
    title: "Meme Magic",
    description: "Powered by the dankest memes in the cryptoverse! 🐕",
    gradient: "from-[#00ff00] to-[#ff00ff]",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-primary"
          >
            Much Features
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Kairos is{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ff00]">
              Pure Magic
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Not just another meme coin - we&apos;re here to revolutionize the game! 🎮
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="relative p-6 overflow-hidden bg-black/50 backdrop-blur-sm border-white/10">
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`rounded-xl bg-gradient-to-r ${feature.gradient} p-2.5`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ff00]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

