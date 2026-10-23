import { CONFIG } from "@/config";

type BrandLogoProps = {
  size?: "nav" | "intro";
  className?: string;
};

/**
 * Triangular badge framing the full mark (icon + "ZONA LIMPIA"),
 * matching the hand-drawn header sketch — wordmark kept intact.
 */
export function BrandLogo({ size = "nav", className = "" }: BrandLogoProps) {
  const isIntro = size === "intro";
  const src = CONFIG.images.logoTri;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={isIntro ? "" : CONFIG.businessName}
      width={isIntro ? 180 : 72}
      height={isIntro ? 166 : 66}
      className={`shrink-0 object-contain drop-shadow-sm ${
        isIntro ? "h-32 w-auto sm:h-36" : "h-12 w-auto sm:h-14"
      } ${className}`}
      aria-hidden={isIntro ? true : undefined}
    />
  );
}
