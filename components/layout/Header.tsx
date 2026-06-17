"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio.data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-sky-200/70 bg-[#eaf7ff]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-black text-slate-900">
          {profile.fullName.split(" ")[0]}
          <span className="text-sky-600">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-sky-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-sky-200 bg-white/50 p-2 text-slate-900 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sky-200 bg-[#eaf7ff] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}