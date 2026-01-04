"use client"

import { motion } from "framer-motion"
import { Dog } from "lucide-react"

const team = [
  {
    name: "Hanzala Ahmad",
    role: "CEO & Founder",
    bio: "Former blockchain lead with 15+ years in fintech. Meme lord by night.",
  },
  {
    name: "Ubaid ul haq",
    role: "CTO",
    bio: "Blockchain architect and AI researcher. Built multiple top 10 protocols.",
  },
  {
    name: "Abdul Moeen",
    role: "CMO",
    bio: "Marketing genius who turned memes into millions. Crypto veteran.",
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

export function TeamSection() {
  return (
    <section id="team" className="relative w-full py-24 overflow-hidden">
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
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionaries behind the revolution. Part human, part meme, all genius! 🧠✨
            </p>
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -10 }} className="group">
                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent">
                  <div className="relative p-6 bg-background rounded-xl flex flex-col items-center text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary p-1"
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <Dog className="h-12 w-12 text-primary" />
                      </div>
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {member.name}
                      </h3>
                      <p className="font-medium text-primary/80">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

