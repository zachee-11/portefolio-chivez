"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { sectionContent, skills } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-[#d7ecf8] via-[#c9e3f2] to-[#b8d7ea] px-6 py-28 text-slate-900"
    >
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[130px]" />
      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Compétences"
          icon={BadgeCheck}
          align="center"
          title={sectionContent.skills.title}
          description={sectionContent.skills.description}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-7 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-700/30 hover:bg-[#f6fbfe]/85"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900 transition group-hover:bg-sky-700 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-2xl font-extrabold leading-tight text-slate-950">
                  {skill.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-medium text-slate-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}