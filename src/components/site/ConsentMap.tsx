import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONSENT_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/consent";

export function ConsentMap({ src, title }: { src: string; title: string }) {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    setChoice(readConsent());
    const handleChange = (event: Event) => setChoice((event as CustomEvent<ConsentChoice>).detail);
    window.addEventListener(CONSENT_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleChange);
  }, []);

  if (choice === "accepted") {
    return <iframe title={title} src={src} loading="lazy" className="h-[360px] w-full border border-border" />;
  }

  return (
    <div className="flex min-h-[360px] items-center justify-center border border-border bg-secondary/60 px-6 text-center">
      <div className="max-w-md">
        <p className="font-sans text-xl font-medium text-foreground">Afficher la carte Google</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">La carte est bloquée tant que vous n'avez pas accepté les services externes.</p>
        <Button type="button" className="mt-5" onClick={() => saveConsent("accepted")}>Accepter et afficher la carte</Button>
      </div>
    </div>
  );
}
