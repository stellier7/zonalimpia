"use client";

import { CONFIG } from "@/config";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { waLink } from "@/lib/whatsapp";

export function ExpressCleaning() {
  return (
    <section id="express" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue uppercase">
            {CONFIG.copy.expressEyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            {CONFIG.copy.expressTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-brand-navy/75">
            {CONFIG.expressHowItWorks}
          </p>
          <p className="mt-3 max-w-3xl text-base text-brand-navy/75">
            {CONFIG.copy.expressSubtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-heading text-xl font-bold text-brand-navy">
              {CONFIG.copy.expressAreasTitle}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CONFIG.expressAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-xl bg-soft-grey px-3 py-2 text-sm font-medium text-brand-navy ring-1 ring-brand-navy/8"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-heading text-xl font-bold text-brand-navy">
              {CONFIG.copy.expressTasksTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {CONFIG.expressTasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-2.5 text-sm text-brand-navy/80"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-brand-navy">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {task}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue uppercase">
              {CONFIG.copy.specialEyebrow}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold text-brand-navy">
              {CONFIG.copy.specialTitle}
            </h3>
            <p className="mt-3 text-base text-brand-navy/75">
              {CONFIG.copy.specialSubtitle}
            </p>
            <Stagger className="mt-5 space-y-2.5">
              {CONFIG.specialServices.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-2.5 text-sm text-brand-navy/80">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/35 text-brand-navy">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue uppercase">
              {CONFIG.copy.conditionsEyebrow}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold text-brand-navy">
              {CONFIG.copy.conditionsTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {CONFIG.conditions.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-soft-grey px-4 py-3 text-sm leading-relaxed text-brand-navy/80 ring-1 ring-brand-navy/8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <a
            href={waLink(
              CONFIG.services.find((s) => s.id === "express")?.whatsappMessage ??
                CONFIG.defaultWhatsAppMessage,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {CONFIG.labels.quoteWhatsApp}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
