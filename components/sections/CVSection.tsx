"use client";

import { Download, Eye, FileText } from "lucide-react";
import { profile, sectionContent } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CVSection() {
  return (
    <section
      id="cv"
      className="relative overflow-hidden bg-gradient-to-br from-[#d7ecf8] via-[#c9e3f2] to-[#b8d7ea] px-6 py-28 text-slate-900"
    >
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="CV"
          icon={FileText}
          align="center"
          title={sectionContent.cv.title}
          description={sectionContent.cv.description}
        />

        <div className="grid items-start gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/80 p-8 shadow-xl shadow-sky-900/10 backdrop-blur-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900">
              <FileText size={30} />
            </div>

            <h3 className="text-3xl font-extrabold leading-tight text-slate-950">
              Mon CV professionnel
            </h3>

            <p className="mt-4 font-medium leading-7 text-slate-700">
              Je mets à disposition mon CV afin de présenter mon parcours, mes
              expériences en comptabilité, banque et analyse financière, ainsi
              que mes formations en gestion et finance.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={profile.cvUrl}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-sky-900/10 bg-[#f6fbfe]/90 px-6 py-4 font-bold text-slate-900 shadow-lg shadow-sky-900/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-700/30"
              >
                <Eye className="mr-2 h-4 w-4" />
                Visualiser le CV
              </a>

              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-4 font-bold text-white shadow-xl shadow-sky-900/20 transition hover:-translate-y-1 hover:bg-sky-800"
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger le CV
              </a>
            </div>

            <div className="mt-8 rounded-3xl border border-sky-900/10 bg-[#d7ecf8]/70 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-900">
                Disponibilité
              </p>
              <p className="mt-3 font-medium leading-7 text-slate-700">
                Je recherche une alternance en Comptabilité, Contrôle et Audit.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-3 shadow-2xl shadow-sky-900/10 backdrop-blur-xl">
            <iframe
              src={profile.cvUrl}
              className="h-[760px] w-full rounded-[1.5rem] bg-white"
              title={`CV ${profile.fullName}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}