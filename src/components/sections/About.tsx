"use client";

import { useState } from "react";
import { CONFIG } from "@/config";
import { Img } from "@/components/Img";
import { Reveal } from "@/components/Reveal";

export function About() {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8 ${
          showPhoto ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
        }`}
      >
        {showPhoto && (
          <Reveal>
            <Img
              src={CONFIG.images.owner}
              alt={`${CONFIG.owner}, ${CONFIG.businessName}`}
              width={800}
              height={960}
              className="aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-brand-navy/8"
              onErrorHide
              onLoadError={() => setShowPhoto(false)}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        )}

        <Reveal delay={showPhoto ? 0.08 : 0}>
          <p className="text-sm font-semibold tracking-[0.16em] text-brand-blue uppercase">
            {CONFIG.copy.aboutEyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
            {CONFIG.owner}
          </h2>
          <p className="mt-2 text-sm font-semibold text-brand-navy/60">
            {CONFIG.ownerTitle} · {CONFIG.businessName}
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/80">
            {CONFIG.experienceClaim}. {CONFIG.copy.aboutP1}
          </p>
          <p className="mt-3 text-base leading-relaxed text-brand-navy/80">
            {CONFIG.copy.aboutP2} {CONFIG.areasServed.join(", ")}.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {CONFIG.values.map((value) => (
              <li
                key={value}
                className="rounded-full bg-soft-grey px-3 py-1.5 text-xs font-semibold text-brand-navy ring-1 ring-brand-navy/10"
              >
                {value}
              </li>
            ))}
          </ul>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CONFIG.images.issa}
            alt="ISSA — Advancing Clean. Driving Innovation."
            width={200}
            height={110}
            className="mt-6 h-14 w-auto object-contain opacity-90"
          />
        </Reveal>
      </div>
    </section>
  );
}
