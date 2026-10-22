"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import type { SiteImage } from "@/lib/images";

type PhotoProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  image: SiteImage;
  /** Overrides the registry alt, e.g. `""` for decorative backgrounds. */
  alt?: string;
};

/**
 * A registry photo that keeps its focal point in view however CSS crops it
 * (`object-fit: cover`). Recomputed whenever the rendered box resizes.
 */
export function Photo({ image, alt, fill, ...rest }: PhotoProps) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const place = () => {
      el.style.objectPosition = focalPosition(el.clientWidth, el.clientHeight, image);
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(el);
    return () => observer.disconnect();
  }, [image]);

  return (
    <Image
      ref={ref}
      src={image.src}
      alt={alt ?? image.alt}
      {...(fill ? { fill } : { width: image.width, height: image.height })}
      {...rest}
    />
  );
}

/**
 * Wide frames use the `desktop` focal point, everything else `square`. The
 * returned object-position centres that point in the frame, clamped so the
 * image never slides past its own edge.
 */
function focalPosition(boxWidth: number, boxHeight: number, image: SiteImage) {
  const { width, height, focal } = image;
  if (!boxWidth || !boxHeight) return "";
  const wide = boxWidth / boxHeight >= 1.35;
  const point = focal?.[wide ? "desktop" : "square"] ?? {
    x: 50,
    y: height > width ? (wide ? 28 : 38) : 50,
  };
  const scale = Math.max(boxWidth / width, boxHeight / height);
  const axis = (size: number, box: number, pct: number) =>
    size <= box ? 50 : Math.max(0, Math.min(100, (((size * pct) / 100 - box / 2) / (size - box)) * 100));
  return `${axis(width * scale, boxWidth, point.x)}% ${axis(height * scale, boxHeight, point.y)}%`;
}
