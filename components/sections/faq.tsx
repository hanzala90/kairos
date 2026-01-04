"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is Kairos?",
    answer:
      "Kairos is the world's best meme coin with a purpose. While we embrace the fun and community aspects of meme coins, we're also dedicated to funding AI startups that will shape the future.",
  },
  {
    question: "How do I buy Kairos tokens?",
    answer:
      "Kairos tokens can be purchased directly through pump.fun using our official link. The process is simple and secure - just connect your wallet and you're ready to become part of the revolution!",
  },
  {
    question: "What makes Kairos different from other meme coins?",
    answer:
      "Unlike most meme coins that lack utility, Kairos has a clear mission: funding AI innovation. We combine the viral nature of memes with a serious purpose, creating sustainable value for our community.",
  },
  {
    question: "How does the AI startup funding work?",
    answer:
      "30% of all Kairos tokens are allocated to our AI Startup Fund. Token holders can vote on which startups receive funding, and successful projects contribute back to the ecosystem, creating a virtuous cycle of innovation and growth.",
  },
  {
    question: "Is Kairos a safe investment?",
    answer:
      "While all cryptocurrency investments carry risk, Kairos is built on strong fundamentals. Our smart contracts are secure, our team is fully transparent, and our mission is clear. Always do your own research and invest responsibly.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative w-full py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full bg-gray-700/50 px-4 py-1.5"
            >
              <span className="text-sm font-medium">FAQ</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground"
            >
              Everything you need to know about Kairos Token.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <AccordionItem value={`item-${index + 1}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

