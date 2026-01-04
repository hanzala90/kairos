"use client"

import { motion } from "framer-motion"
import { Rocket, Brain, Users, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

const missions = [
  {
    icon: Rocket,
    title: "Moon Mission",
    description: "Launching the most innovative meme coin with real utility and purpose.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Brain,
    title: "AI Innovation",
    description: "Funding groundbreaking AI startups that will shape our future.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Users,
    title: "Community Power",
    description: "Building the strongest and most engaged crypto community.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Target,
    title: "Strategic Growth",
    description: "Creating sustainable value through strategic partnerships and development.",
    gradient: "from-primary to-accent",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function MissionSection() {
  return (
    <section id="mission" className="relative w-full py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-12"
        >
          <motion.div variants={item} className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re not just another meme coin. We&apos;re building the future of crypto and AI together! 🚀
            </p>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missions.map((mission, index) => (
              <motion.div key={index} variants={item} whileHover={{ scale: 1.05 }} className="group">
                <Card className="relative p-6 overflow-hidden bg-background/50 backdrop-blur-sm border border-white/10">
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"
                    style={{
                      backgroundImage: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))`,
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${mission.gradient} p-2.5 flex items-center justify-center`}
                    >
                      <mission.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {mission.title}
                      </h3>
                      <p className="text-muted-foreground">{mission.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

