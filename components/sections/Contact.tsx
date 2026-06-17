"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { profile, sectionContent } from "@/data/portfolio.data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#d8efff] via-[#cceaff] to-[#eef9ff] px-6 py-28 text-slate-900"
    >
      <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-sky-500/20 blur-[130px]" />
      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          icon={MessageCircle}
          title={sectionContent.contact.title}
          description={sectionContent.contact.description}
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-8 shadow-xl shadow-sky-900/10 backdrop-blur-xl">
            <h3 className="text-3xl font-extrabold leading-tight text-slate-950">
              Mes coordonnées
            </h3>

            <p className="mt-4 font-medium leading-7 text-slate-700">
              Je suis disponible pour échanger au sujet d’une alternance en
              comptabilité, contrôle, audit ou finance.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl bg-[#d7ecf8]/70 p-5 shadow-md shadow-sky-900/10 transition hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900">
                  <Mail />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">
                    Email
                  </span>
                  <span className="font-bold">{profile.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-[#d7ecf8]/70 p-5 shadow-md shadow-sky-900/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900">
                  <Phone />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">
                    Téléphone
                  </span>
                  <span className="font-bold">{profile.phone}</span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#d7ecf8]/70 p-5 shadow-md shadow-sky-900/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700/15 text-sky-900">
                  <MapPin />
                </span>
                <span>
                  <span className="block text-sm font-medium text-slate-500">
                    Localisation
                  </span>
                  <span className="font-bold">{profile.location}</span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-sky-900/10 bg-[#eef7fc]/75 p-8 shadow-xl shadow-sky-900/10 backdrop-blur-xl"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Votre nom"
                className="rounded-2xl border border-sky-900/10 bg-[#f6fbfe]/85 px-5 py-4 font-medium outline-none focus:border-sky-700"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Votre email"
                className="rounded-2xl border border-sky-900/10 bg-[#f6fbfe]/85 px-5 py-4 font-medium outline-none focus:border-sky-700"
              />
            </div>

            <input
              name="subject"
              required
              placeholder="Sujet"
              className="mt-5 w-full rounded-2xl border border-sky-900/10 bg-[#f6fbfe]/85 px-5 py-4 font-medium outline-none focus:border-sky-700"
            />

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Votre message"
              className="mt-5 w-full resize-none rounded-2xl border border-sky-900/10 bg-[#f6fbfe]/85 px-5 py-4 font-medium outline-none focus:border-sky-700"
            />

            <button
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-4 font-bold text-white shadow-xl shadow-sky-900/20 transition hover:-translate-y-1 hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="mr-2 h-4 w-4" />
              {status === "loading" ? "Envoi..." : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-bold text-emerald-700">
                Message envoyé avec succès.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm font-bold text-red-700">
                Erreur lors de l’envoi.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}