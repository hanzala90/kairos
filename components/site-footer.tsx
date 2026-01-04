"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Dog, Twitter, DiscIcon as Discord, Github } from "lucide-react"

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Discord", icon: Discord, href: "#" },
  { name: "Github", icon: Github, href: "#" },
]

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="relative w-full bg-background/50 backdrop-blur-xl">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-0.5"
              >
                <div className="bg-background rounded-full w-full h-full flex items-center justify-center">
                  <Dog className="h-6 w-6 text-primary" />
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
              >
                KAIROS
              </motion.span>
            </Link>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              © {new Date().getFullYear()} Kairos. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-primary"
              >
                ❤️
              </motion.span>
              <span>by the Kairos Team</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient line at the bottom */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />
    </footer>
  )
}

