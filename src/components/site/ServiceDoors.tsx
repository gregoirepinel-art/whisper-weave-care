type Service = {
  title: string;
  text: string;
};

export function ServiceDoors({ services }: { services: readonly Service[] }) {
  return (
    <div className="rule-top grid md:grid-cols-2">
      {services.map((service, index) => (
        <details
          key={service.title}
          className="group border-b border-border md:odd:border-r"
        >
          <summary className="grid cursor-pointer list-none grid-cols-[4.5rem_1fr] gap-6 py-9 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring md:grid-cols-[5.5rem_1fr] md:gap-8 md:px-8 md:py-11 [&::-webkit-details-marker]:hidden">
            <span
              className="relative h-24 w-[3.75rem] self-start border-2 border-primary p-1 md:h-28 md:w-[4.5rem]"
              aria-hidden="true"
            >
              <span className="relative flex h-full w-full origin-left items-start justify-center bg-primary pt-4 text-primary-foreground transition-transform duration-500 motion-reduce:transition-none md:pt-5 md:group-hover:[transform:perspective(500px)_rotateY(-8deg)] md:group-open:[transform:perspective(500px)_rotateY(-14deg)]">
                <span className="font-display text-xl">{String(index + 1).padStart(2, "0")}</span>
                <span className="absolute right-1.5 top-1/2 h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="absolute -bottom-1.5 -left-2 h-px w-[calc(100%+1rem)] bg-primary" />
            </span>

            <span className="flex min-w-0 items-center justify-between gap-4 self-center">
              <span className="font-display text-2xl leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </span>
              <span
                className="shrink-0 text-xl text-primary transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                aria-hidden="true"
              >
                +
              </span>
            </span>
          </summary>

          <div className="grid grid-cols-[4.5rem_1fr] gap-6 pb-10 md:grid-cols-[5.5rem_1fr] md:gap-8 md:px-8 md:pb-12">
            <div aria-hidden="true" />
            <p className="max-w-xl border-l-2 border-accent pl-5 leading-relaxed text-muted-foreground">
              {service.text}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}