import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{SITE.name}</p>
            <p className="mt-2 text-sm opacity-70">{SITE.role}</p>
            <p className="mt-6 text-sm opacity-70">{SITE.baseline}</p>
          </div>

          <div className="text-sm leading-7 opacity-80">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.24em] opacity-60">Cabinet</p>
            <p>{SITE.street}</p>
            <p>
              {SITE.postalCode} {SITE.city}
            </p>
            <p className="mt-3">
              <a href={SITE.phoneHref} className="link-underline">
                {SITE.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={SITE.emailHref} className="link-underline break-all">
                {SITE.email}
              </a>
            </p>
            <p className="mt-3">{SITE.hours}</p>

          </div>

          <div className="text-sm leading-7 opacity-80">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.24em] opacity-60">Le site</p>
            <ul className="space-y-1">
              <li>
                <Link to="/qui-suis-je" className="link-underline">
                  Qui suis-je
                </Link>
              </li>
              <li>
                <Link to="/particuliers" className="link-underline">
                  Particuliers
                </Link>
              </li>
              <li>
                <Link to="/entreprises" className="link-underline">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="link-underline">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link-underline">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/mentions-legales" className="link-underline">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            N° RPPS {SITE.rpps} · N° ADELI {SITE.adeli}
          </p>
          <p>En cas d'urgence, contactez le 15 (SAMU) ou le 3114.</p>
        </div>
      </div>
    </footer>
  );
}
