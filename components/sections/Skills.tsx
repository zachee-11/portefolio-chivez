"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { sectionContent, skills } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const colorClasses = {
  blue: {
    border: "border-l-blue-600",
    icon: "bg-blue-100 text-blue-800",
    line: "bg-blue-600",
    dot: "bg-blue-600",
    glow: "bg-blue-500/20",
  },
  green: {
    border: "border-l-emerald-600",
    icon: "bg-emerald-100 text-emerald-800",
    line: "bg-emerald-600",
    dot: "bg-emerald-600",
    glow: "bg-emerald-500/20",
  },
  orange: {
    border: "border-l-orange-500",
    icon: "bg-orange-100 text-orange-800",
    line: "bg-orange-500",
    dot: "bg-orange-500",
    glow: "bg-orange-500/20",
  },
} as const;

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
          eyebrow="Compétences clés"
          icon={BadgeCheck}
          title={sectionContent.skills.title}
          description={sectionContent.skills.description}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const styles =
              colorClasses[skill.color as keyof typeof colorClasses];

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-sky-900/10 border-l-4 ${styles.border} bg-[#eef7fc]/78 p-8 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-[#f6fbfe]/90`}
              >
                <div
                  className={`absolute -right-20 -top-20 h-56 w-56 rounded-full ${styles.glow} blur-3xl transition group-hover:scale-125`}
                />

                <div className="relative">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/65 shadow-xl shadow-sky-900/10 backdrop-blur">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${styles.icon}`}
                    >
                      <Icon size={34} />
                    </div>
                  </div>

                  <h3 className="text-center text-3xl font-extrabold tracking-tight text-slate-950">
                    {skill.title}
                  </h3>

                  <div className={`mx-auto mt-4 h-1 w-16 rounded-full ${styles.line}`} />

                  <p className="mt-6 min-h-[120px] text-center font-medium leading-8 text-slate-700">
                    {skill.description}
                  </p>

                  <div className="mt-7 border-t border-sky-900/10 pt-7">
                    <ul className="space-y-4">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700"
                        >
                          <span
                            className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${styles.dot}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-full border border-sky-900/10 bg-[#eef7fc]/75 px-6 py-3 font-bold text-slate-800 shadow-xl shadow-sky-900/10 backdrop-blur-xl"
        >
          <GraduationCap className="text-sky-800" size={20} />
          BUT GEA — Parcours Gestion Comptable, Fiscale et Financière
        </motion.div>
      </div>
    </section>
  );
}