"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Factory, FolderOpen, LineChart } from "lucide-react";
import { projects, sectionContent } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = [Factory, LineChart];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-[#d8efff] via-[#cceaff] to-[#eef9ff] px-6 py-28 text-slate-900"
    >
      <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[130px]" />
      <div className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projets SAE"
          icon={FolderOpen}
          title={sectionContent.projects.title}
          description={sectionContent.projects.description}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = icons[index] ?? Factory;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-8 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-700/30 hover:bg-[#f6fbfe]/85"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl transition group-hover:bg-sky-500/25" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900 transition group-hover:bg-sky-700 group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <ArrowUpRight className="text-sky-800 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-800">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-5 font-medium leading-8 text-slate-700">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-sky-900/10 bg-[#d7ecf8]/70 px-4 py-2 text-sm font-bold text-slate-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}