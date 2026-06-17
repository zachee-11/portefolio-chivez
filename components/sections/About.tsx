"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Goal, Sparkles, UserRound } from "lucide-react";
import { sectionContent } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cards = [
  {
    icon: UserRound,
    title: "Mon profil",
    text: "Je suis étudiante en BUT III Gestion des Entreprises et des Administrations, parcours Gestion Comptable, Fiscale et Financière. Je développe mes compétences en comptabilité, fiscalité, finance et contrôle de gestion.",
  },
  {
    icon: Goal,
    title: "Mon objectif",
    text: "Je recherche une alternance en Comptabilité, Contrôle et Audit afin de mettre en pratique mes acquis et progresser dans un environnement professionnel structuré.",
  },
  {
    icon: CheckCircle2,
    title: "Ma méthode",
    text: "Je travaille avec rigueur, organisation et esprit d’analyse, en m’appuyant sur les données comptables, les outils bureautiques et une démarche claire.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#d7ecf8] via-[#c9e3f2] to-[#b8d7ea] px-6 py-28 text-slate-900"
    >
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="À propos"
          icon={Sparkles}
          title={sectionContent.about.title}
          description={sectionContent.about.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-8 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sky-700/30 hover:bg-[#f6fbfe]/85"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900 transition group-hover:bg-sky-700 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-2xl font-extrabold leading-tight text-slate-950">
                  {card.title}
                </h3>

                <p className="mt-4 font-medium leading-7 text-slate-700">
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}