"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { PHeading, PText } from "@porsche-design-system/components-react";

const ContactFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const fabVariants: Variants = {
    closed: {
      width: 56,
      height: 56,
      borderRadius: 28,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      },
    },
    open: {
      width: "min(90vw, 400px)",
      height: "auto",
      borderRadius: 16,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.9,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  const socialIconVariants: Variants = {
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    }),
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <motion.div
        ref={containerRef}
        variants={fabVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flex cursor-pointer items-center justify-center overflow-hidden bg-white shadow-2xl dark:bg-zinc-900"
        style={{
          originX: 1,
          originY: 1,
          position: "relative",
        }}
        onClick={() => !isOpen && setIsOpen(true)}
        whileHover={!isOpen ? { scale: 1.05 } : {}}
        whileTap={!isOpen ? { scale: 0.95 } : {}}
      >
        {/* FAB Icon - Always present */}
        <AnimatePresence mode="popLayout">
          {!isOpen && (
            <motion.div
              key="plus-icon"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <IconPlus className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Content */}
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.div
              key="expanded-content"
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex h-[16rem] w-[40rem] flex-col items-center space-y-5 p-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <PHeading size="large">Let&apos;s get connected</PHeading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <PText color="primary">
                  Follow me on socials, explore my work, or hire me!
                </PText>
              </motion.div>

              <div className="flex gap-6 text-2xl">
                {[
                  {
                    icon: IconBrandLinkedin,
                    href: "https://www.linkedin.com/in/muhammedsanjid1/",
                    hoverColor: "hover:text-[#0a66c2]",
                  },
                  {
                    icon: IconBrandX,
                    href: "https://x.com/dev_sanjid",
                    hoverColor: "hover:text-black dark:hover:text-white",
                  },
                  {
                    icon: IconBrandGithub,
                    href: "https://github.com/m-sanjid",
                    hoverColor: "hover:text-neutral-600",
                  },
                  {
                    icon: IconMail,
                    href: "mailto:hello@sanjid.in",
                    hoverColor: "hover:text-neutral-600",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    custom={index}
                    variants={socialIconVariants}
                    initial="closed"
                    animate="open"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.hoverColor} transform transition-colors duration-200 hover:scale-110`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                href="https://sanjid.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:scale-105 hover:bg-zinc-200 hover:shadow-md dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.a>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 rounded-full p-2 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconX className="h-4 w-4 text-neutral-400 hover:text-black dark:hover:text-white" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactFAB;
