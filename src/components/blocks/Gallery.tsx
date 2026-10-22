import { Photo } from "@/components/Photo";
import type { BlockOf } from "@/lib/content";
import { images } from "@/lib/images";

export function Gallery({ lead, images: keys }: BlockOf<"gallery">) {
  return (
    <section className="section">
      <div className="container">
        <p className="lead">{lead}</p>
        <div className="gallery">
          {keys.map((key) => (
            <Photo key={key} image={images[key]} sizes="(max-width: 640px) 50vw, 380px" />
          ))}
        </div>
      </div>
    </section>
  );
}
