import { CONFIG } from "@/config";

type BrandLogoProps = {
  size?: "nav" | "intro";
  className?: string;
};

/**
 * Triangular badge that frames the full mark (icon + "ZONA LIMPIA")
 * without clipping the wordmark — apex up, base under the text.
 */
export function BrandLogo({ size = "nav", className = "" }: BrandLogoProps) {
  const isIntro = size === "intro";

  return (
    <span
      className={`brand-logo-tri relative inline-flex shrink-0 items-center justify-center bg-white shadow-soft ${
        isIntro ? "h-32 w-32 sm:h-36 sm:w-36" : "h-12 w-12 sm:h-14 sm:w-14"
      } ${className}`}
      aria-hidden={isIntro ? true : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CONFIG.images.logo}
        alt={isIntro ? "" : CONFIG.businessName}
        width={isIntro ? 160 : 64}
        height={isIntro ? 160 : 64}
        className={`relative z-10 object-contain ${
          isIntro
            ? "mt-[12%] h-[78%] w-[78%]"
            : "mt-[10%] h-[82%] w-[82%]"
        }`}
      />
    </span>
  );
}
