import { ParallaxFill } from "@/components/Animation/Parallax";

/**
 * Section transitions.
 *
 * Earlier versions blended one ground into the next with gradients and a
 * curved SVG. On a real display those read as smeared bands, so they are
 * gone. Sections are flat colour, and where two of them meet the upper
 * one dissolves through the brand lattice - the tessellated logomark
 * from the brand pattern assets - onto the top of the next. The edge
 * lies over the next section (see .voe-edge), so the lower colour is
 * that section's real background and nothing has to be matched.
 */

/**
 * The colour each ground ends on - its last row - which is what the
 * edge beneath it paints. The blue ground runs a vertical lift, so its
 * last row is the darker step of the hue; the closing band and footer
 * are flat Equity Blue.
 */
export const GROUND = {
  white: "#FBFFFE",
  frost: "#F8FAFE",
  mist: "#F1F5FD",
  blueSoft: "#E6EDFC",
  greenSoft: "#DFF2F0",
  blue: "#4A6FCC",
  blueDeep: "#587FDA",
  green: "#23736E",
  ink: "#171219",
  navy: "#16264A",
} as const;

type EdgeSize = "sm" | "md" | "lg";

/**
 * The lattice edge. Sits between two sections: `from` is the colour the
 * section above ends on. It dissolves through the pattern onto the
 * section below, which shows through the lines and takes over entirely
 * by the foot of the band.
 */
export function Edge({ from, size = "md" }: { from: string; size?: EdgeSize }) {
  return (
    <div
      aria-hidden
      className={`voe-edge ${size === "sm" ? "voe-edge--sm" : size === "lg" ? "voe-edge--lg" : ""}`}
      style={{ ["--voe-edge-from" as string]: from }}
    />
  );
}

/**
 * Full-bleed photograph between two sections. Hard edges - the picture
 * is a block of its own, the way the reference sites treat photography.
 */
export function SeamPhoto({
  src,
  alt = "",
  height = "clamp(240px, 34vw, 480px)",
  objectPosition = "center 35%",
}: {
  src: string;
  alt?: string;
  height?: string;
  /** Where to anchor the crop. Faces usually sit high, so default is above centre. */
  objectPosition?: string;
}) {
  return (
    <div aria-hidden={alt === ""} className="relative w-full overflow-hidden" style={{ height }}>
      <ParallaxFill
        src={src}
        alt={alt}
        objectPosition={objectPosition}
        strength={110}
        sizes="100vw"
      />
    </div>
  );
}
