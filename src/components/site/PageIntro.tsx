import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
      <p className="eyebrow rise">{eyebrow}</p>
      <h1 className="rise mt-5 max-w-3xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
      {lead && (
        <p className="rise mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
      )}
      {children && <div className="rise mt-9">{children}</div>}
    </section>
  );
}
