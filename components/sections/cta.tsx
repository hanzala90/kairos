"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            >
              <Rocket className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold tracking-tight"
              >
                Join the World&apos;s Best{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-primary to-[#00ff00]">
                  Meme Coin
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Don&apos;t miss your moment. Be part of a meme coin that&apos;s changing the future of AI! 🚀
              </motion.p>
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-[#ff00ff] via-[#ff69b4] to-[#00ff00] hover:opacity-90 transition-opacity"
                onClick={() =>
                  window.open("https://pump.fun/coin/EWXBM2ZJNzUTajCuKzrMvkbcn4JnG9RV3iwFtsempump", "_blank")
                }
              >
                <span className="mr-2">✨</span>
                Buy Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

