import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/qui-suis-je", label: "Qui suis-je" },
  { to: "/particuliers", label: "Particuliers" },
  { to: "/entreprises", label: "Entreprises" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-tight text-foreground">{SITE.name}</span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            Psychologue · Tours
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a href={SITE.doctolib} target="_blank" rel="noreferrer" className="btn-primary">
            Prendre rendez-vous
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.doctolib}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4 justify-center"
            >
              Prendre rendez-vous
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
