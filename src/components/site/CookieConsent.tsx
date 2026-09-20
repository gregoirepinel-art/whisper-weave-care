import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CONSENT_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const measurementId = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"];

function enableAnalytics() {
  if (!measurementId || document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset["gaId"] = measurementId;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(["js", new Date()]);
  window.dataLayer.push(["config", measurementId, { anonymize_ip: true }]);
}

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setChoice(stored);
    setReady(true);
    if (stored === "accepted") enableAnalytics();
  }, []);

  function choose(next: ConsentChoice) {
    saveConsent(next);
    setChoice(next);
    if (next === "accepted") enableAnalytics();
  }

  useEffect(() => {
    const handleChange = (event: Event) => setChoice((event as CustomEvent<ConsentChoice>).detail);
    window.addEventListener(CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleChange);
  }, []);

  if (!ready || choice !== null) return null;

  return (
    <aside aria-label="Préférences de confidentialité" className="fixed inset-x-4 bottom-24 z-[60] mx-auto max-w-2xl border border-border bg-background p-5 shadow-xl lg:bottom-6">
      <p className="font-sans text-lg font-medium text-foreground">Votre confidentialité</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Avec votre accord, Google Analytics mesure anonymement la fréquentation et la carte Google s'affiche. En refusant, le site reste entièrement accessible.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button type="button" onClick={() => choose("accepted")}>Tout accepter</Button>
        <Button type="button" variant="outline" onClick={() => choose("refused")}>Tout refuser</Button>
        <Link to="/politique-confidentialite" className="link-underline text-sm">En savoir plus</Link>
      </div>
    </aside>
  );
}
