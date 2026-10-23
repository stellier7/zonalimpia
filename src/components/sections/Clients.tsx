"use client";

import { CONFIG } from "@/config";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Clients() {
  if (CONFIG.clients.length === 0) return null;

  return (
    <section id="clientes" className="scroll-mt-20 bg-soft-grey py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue uppercase">
            {CONFIG.copy.clientsEyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            {CONFIG.copy.clientsTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-brand-navy/75">
            {CONFIG.copy.clientsSubtitle}
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.clients.map((client) => (
            <StaggerItem key={client}>
              <div className="flex h-full items-center rounded-xl bg-white px-4 py-4 text-sm font-semibold text-brand-navy shadow-soft ring-1 ring-brand-navy/8">
                {client}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
