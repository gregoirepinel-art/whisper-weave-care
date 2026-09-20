export const CONSENT_STORAGE_KEY = "karen-pinel-cookie-consent";
export const CONSENT_EVENT = "karen-pinel-consent-change";

export type ConsentChoice = "accepted" | "refused";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "refused" ? value : null;
}

export function saveConsent(choice: ConsentChoice) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}
