"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile, stats } from "@/data/portfolio.data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#c7e7ff] via-[#dff2ff] to-[#f7fcff] px-6 pb-28 pt-36 text-slate-900">
      <div className="absolute left-10 top-24 h-80 w-80 rounded-full bg-sky-300/50 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-blue-300/40 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex rounded-full bg-white/55 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-sky-700 shadow-lg shadow-sky-200/60 backdrop-blur-xl">
            Portfolio professionnel
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            {profile.fullName}
          </motion.h1>

          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 text-2xl font-bold text-sky-800 md:text-3xl">
            {profile.title}
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Je suis étudiante en troisième année de BUT GEA. Je possède des bases solides en comptabilité générale, analyse financière et gestion budgétaire. Je recherche une alternance en Comptabilité, Contrôle et Audit.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-2 backdrop-blur-xl">
              <MapPin size={16} className="text-sky-600" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-2 backdrop-blur-xl">
              <Phone size={16} className="text-sky-600" /> {profile.phone}
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-sky-500 px-6 py-3 font-bold text-white shadow-xl shadow-sky-300/70 transition hover:-translate-y-1 hover:bg-sky-600">
              <Mail className="mr-2 h-4 w-4" /> Me contacter
            </a>
            <a href={profile.cvUrl} download className="inline-flex items-center rounded-full border border-sky-300 bg-white/55 px-6 py-3 font-bold text-slate-900 shadow-xl shadow-sky-200/50 backdrop-blur-xl transition hover:-translate-y-1">
              <Download className="mr-2 h-4 w-4" /> Télécharger le CV
            </a>
          </motion.div>
        </div>

        <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.25 }}
  className="relative rounded-[2.2rem] border border-sky-900/10 bg-[#eef7fc]/65 p-5 shadow-2xl shadow-sky-900/10 backdrop-blur-xl"
>
  <div className="absolute -inset-4 rounded-[2.6rem] bg-sky-500/20 blur-2xl" />

  <div className="relative h-[560px] overflow-hidden rounded-[1.8rem] border border-white/40 md:h-[620px]">
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.4 }}
      animate={{ scale: 1.2 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <Image
        src={profile.photo}
        alt="Photo de Chivez FOKAM BEKO"
        fill
        priority
        className="object-cover object-center"
      />
    </motion.div>

    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/35 via-transparent to-transparent" />
  </div>

  <div className="relative mt-5 grid grid-cols-3 gap-3">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="rounded-2xl bg-white/60 p-4 text-center shadow-lg shadow-sky-900/10 backdrop-blur"
      >
        <p className="font-black text-sky-800">{stat.value}</p>
        <p className="mt-1 text-xs font-semibold text-slate-600">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</motion.div>
      </div>

      <a href="#about" className="relative mx-auto mt-16 flex w-fit items-center gap-2 text-sm font-bold text-sky-700">
        Découvrir le portfolio <ArrowDown size={16} />
      </a>
    </section>
  );
}