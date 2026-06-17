"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "center",
}: Props) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${isCenter ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}
    >
      <div
        className={`mb-6 flex ${isCenter ? "justify-center" : "justify-start"}`}
      >
        <span className="inline-flex items-center gap-3 rounded-full border border-sky-700/20 bg-sky-900/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-sky-900">
          <Icon size={17} />
          {eyebrow}
        </span>
      </div>

      <div className="relative">
        <div
          className={`absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-sky-500/20 blur-2xl ${
            isCenter ? "left-1/2 -translate-x-1/2" : "-left-4"
          }`}
        />

        <h2 className="relative text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h2>
      </div>

      <p className="mt-6 text-base font-medium leading-8 text-slate-700 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}