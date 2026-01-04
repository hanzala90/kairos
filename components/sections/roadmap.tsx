"use client"

import { motion } from "framer-motion"

const roadmapSteps = [
  {
    title: "Q1 2024 - Launch Phase",
    description:
      "Token launch on pump.fun. Community building and initial marketing push. Strategic partnerships development.",
    status: "completed",
  },
  {
    title: "Q2 2024 - Growth Phase",
    description: "Major exchange listings. Launch of AI startup funding platform. Community governance implementation.",
    status: "current",
  },
  {
    title: "Q3 2024 - Innovation Phase",
    description: "First round of AI startup funding. Launch of staking platform. Cross-chain bridge development.",
    status: "upcoming",
  },
  {
    title: "Q4 2024 - Expansion Phase",
    description: "Global marketing campaign. Enterprise partnerships. Launch of Kairos DAO.",
    status: "upcoming",
  },
  {
    title: "Q1 2025 - Evolution Phase",
    description: "Kairos ecosystem expansion. Advanced AI integration. Global adoption drive.",
    status: "upcoming",
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative w-full py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center space-y-4 mb-12">
            <motion.div variants={item} className="inline-block rounded-full bg-gray-700/50 px-4 py-1.5">
              <span className="text-sm font-medium">Roadmap</span>
            </motion.div>

            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Journey Forward
            </motion.h2>

            <motion.p variants={item} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic milestones on our path to revolutionizing the cryptocurrency market.
            </motion.p>
          </div>

          <div className="relative pl-8 space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            {roadmapSteps.map((step, index) => (
              <motion.div key={index} variants={item} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-[-35px] w-8 h-8">
                  <div className="absolute w-full h-full rounded-full bg-background border-2 border-primary" />
                  {step.status === "completed" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-2 rounded-full bg-primary"
                    />
                  )}
                  {step.status === "current" && (
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-2 rounded-full bg-secondary"
                    />
                  )}
                </div>

                <div className="pl-8">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

