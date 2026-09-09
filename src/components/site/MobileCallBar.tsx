import { SITE } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/15 bg-primary/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-6xl items-stretch gap-2 px-4 py-3">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center rounded-full border border-primary-foreground/35 px-4 py-3 text-sm text-primary-foreground"
        >
          Appeler
        </a>
        <a
          href={SITE.doctolib}
          target="_blank"
          rel="noreferrer"
          className="btn-accent flex-1 justify-center"
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}
