import Image from "next/image";

type SlotProps = {
  /** Drop a real path in here and the dashed placeholder disappears. */
  src?: string;
  alt: string;
  /** Dimension hint shown only while the slot is empty. */
  note?: string;
  className?: string;
  /** Loads the image eagerly — use for above-the-fold art only. */
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
};

/**
 * A fixed-ratio image well. With no `src` it renders the dashed art-direction
 * placeholder carrying the intended alt text, so slots stay documented until
 * real photography lands.
 */
export function Slot({
  src,
  alt,
  note,
  className = "",
  priority = false,
  sizes = "100vw",
  children,
}: SlotProps) {
  const classes = ["slot", src ? "" : "slot--dash", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} style={{ objectFit: "cover" }} />
      ) : (
        note && <span className="slot__note">{note}</span>
      )}
      {children}
    </div>
  );
}
