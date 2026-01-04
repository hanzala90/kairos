"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Dog, Menu, Rocket, Sparkles } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Mission", href: "#mission" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
]

const buyUrl = "https://pump.fun/coin/EWXBM2ZJNzUTajCuKzrMvkbcn4JnG9RV3iwFtsempump"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBuyClick = () => {
    window.open(buyUrl, "_blank")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10"
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ff00ff] via-primary to-[#00ff00] p-0.5"
            >
              <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                <Dog className="h-6 w-6 text-[#ff00ff]" />
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-primary to-[#00ff00]"
            >
              KAIROS
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/60 hover:text-[#ff00ff] transition-colors relative group"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff00ff] to-[#00ff00] group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleBuyClick}
                className="hidden md:inline-flex bg-gradient-to-r from-[#ff00ff] via-[#ff69b4] to-[#00ff00] hover:opacity-90 transition-opacity"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Buy Now
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg">
                <motion.div
                  className="flex flex-col gap-6 px-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ff00ff] via-primary to-[#00ff00] p-0.5">
                      <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                        <Dog className="h-6 w-6 text-[#ff00ff]" />
                      </div>
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-primary to-[#00ff00]">
                      KAIROS
                    </span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-foreground/60 hover:text-[#ff00ff] transition-colors"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                      <Button
                        className="w-full bg-gradient-to-r from-[#ff00ff] via-[#ff69b4] to-[#00ff00] hover:opacity-90"
                        onClick={handleBuyClick}
                      >
                        <Rocket className="mr-2 h-4 w-4" />
                        Buy Now
                        <Sparkles className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </nav>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

