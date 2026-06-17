"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { education, sectionContent } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-[#d7ecf8] via-[#c9e3f2] to-[#b8d7ea] px-6 py-28 text-slate-900"
    >
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Formation"
          icon={GraduationCap}
          title={sectionContent.education.title}
          description={sectionContent.education.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-7 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-700/30 hover:bg-[#f6fbfe]/85"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900 transition group-hover:bg-sky-700 group-hover:text-white">
                <GraduationCap />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-800">
                {item.school}
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-slate-950">
                {item.title}
              </h3>

              <div className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
                <p className="flex items-center gap-2">
                  <Calendar size={16} className="text-sky-700" />
                  {item.period}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-sky-700" />
                  {item.location}
                </p>
              </div>

              <p className="mt-5 font-medium leading-7 text-slate-700">
                {item.details}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}