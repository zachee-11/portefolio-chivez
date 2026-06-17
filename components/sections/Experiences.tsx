"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";
import { experiences, sectionContent } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-gradient-to-br from-[#d8efff] via-[#cceaff] to-[#eef9ff] px-6 py-28 text-slate-900"
    >
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/30 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-blue-300/40 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Expériences"
          icon={BriefcaseBusiness}
          align="center"
          title={sectionContent.experiences.title}
          description={sectionContent.experiences.description}
        />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-6 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-700/30 hover:bg-[#f6fbfe]/85 md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
                <div>
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/80 p-4 shadow-xl shadow-sky-900/10">
                    <Image
                      src={experience.logo}
                      alt={`Logo ${experience.company}`}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mt-6 space-y-3 text-sm font-semibold text-slate-600">
                    <p className="flex items-center gap-2">
                      <Calendar size={16} className="text-sky-700" />
                      {experience.period}
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-sky-700" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-800">
                    {experience.company}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
                    {experience.role}
                  </h3>

                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {experience.missions.map((mission) => (
                      <div
                        key={mission}
                        className="rounded-2xl border border-sky-900/10 bg-[#d7ecf8]/70 px-5 py-4 text-sm font-medium leading-6 text-slate-700 transition group-hover:bg-white/60"
                      >
                        <span className="mr-2 text-sky-800">✦</span>
                        {mission}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}