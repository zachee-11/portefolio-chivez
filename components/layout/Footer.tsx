import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio.data";

export function Footer() {
  return (
    <footer className="bg-[#172232] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">
        <div>
          <p className="text-xl font-bold">{profile.fullName}</p>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Portfolio professionnel dédié à la comptabilité, à la finance,
            au contrôle de gestion et à l’audit.
          </p>
        </div>

        <div>
          <p className="mb-4 font-semibold text-sky-300">Navigation</p>

          <div className="space-y-2 text-sm text-white/60">
            {navLinks
              .filter((link) => link.href !== "#home" && link.href !== "#contact")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-sky-300">Profil</p>

          <div className="space-y-2 text-sm text-white/60">
            <p>BUT GEA - GCF</p>
            <p>Comptabilité</p>
            <p>Analyse financière</p>
            <p>Contrôle & Audit</p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-sky-300">Contact</p>

          <div className="space-y-3 text-sm text-white/60">
            <p className="flex items-center gap-2">
              <Mail size={16} />
              {profile.email}
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} />
              {profile.phone}
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 text-sm text-white/50 md:flex-row md:px-10 lg:px-16">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Tous droits
            réservés.
          </p>

          <p>Portfolio Comptabilité · Finance · Contrôle · Audit</p>
        </div>
      </div>
    </footer>
  );
}