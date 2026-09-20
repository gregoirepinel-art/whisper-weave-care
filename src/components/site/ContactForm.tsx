import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { sendContactMessage } from "@/lib/contact.functions";

const inputClass =
  "w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function ContactForm({
  defaultAudience = "particulier",
}: {
  defaultAudience?: "particulier" | "entreprise";
}) {
  const send = useServerFn(sendContactMessage);
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError(null);

    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          audience: (String(fd.get("audience") ?? "particulier") as "particulier" | "entreprise"),
          message: String(fd.get("message") ?? ""),
          website: String(fd.get("website") ?? ""),
        },
      });
      form.reset();
      setState("sent");
    } catch (err) {
      setState("idle");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "L'envoi a échoué. Merci de réessayer.",
      );
    }
  }

  if (state === "sent") {
    return (
      <div className="rule-top pt-10">
        <p className="font-sans text-xl font-medium text-foreground">Message bien reçu.</p>
        <p className="mt-3 max-w-md text-muted-foreground">
          Je vous réponds sous quelques jours ouvrés. Pour une demande urgente de rendez-vous,
          passez par Doctolib ou par téléphone.
        </p>
        <button type="button" className="btn-ghost mt-6" onClick={() => setState("idle")}>
          Écrire un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Ne pas remplir ce champ
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <fieldset className="space-y-3">
        <legend className="eyebrow">Votre demande</legend>
        <div className="flex flex-wrap gap-3 pt-2">
          {(
            [
              { value: "particulier", label: "À titre personnel" },
              { value: "entreprise", label: "Pour une entreprise" },
            ] as const
          ).map((opt) => (
            <label
              key={opt.value}
              className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
            >
              <input
                type="radio"
                name="audience"
                value={opt.value}
                defaultChecked={opt.value === defaultAudience}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Nom</span>
          <input name="name" required minLength={2} maxLength={120} autoComplete="name" className={inputClass} placeholder="Votre nom" />
        </label>
        <label className="block">
          <span className="eyebrow">E-mail</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={inputClass}
            placeholder="vous@exemple.fr"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow">Téléphone (facultatif)</span>
        <input name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputClass} placeholder="06 00 00 00 00" />
      </label>

      <label className="block">
        <span className="eyebrow">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Dites-moi en quelques lignes ce qui vous amène."
        />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button type="submit" className="btn-primary" disabled={state === "sending"}>
        {state === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Les informations transmises servent uniquement à répondre à votre demande. Ce formulaire
        n'est pas un service d'urgence : en cas de détresse immédiate, appelez le 15 ou le 3114. {" "}
        <Link to="/politique-confidentialite" className="link-underline">
          Consulter la politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
