import { Photo } from "@/components/Photo";
import type { BlockOf } from "@/lib/content";
import { images } from "@/lib/images";

export function PersonalPhoto({ image }: BlockOf<"photo">) {
  return (
    <div className="container photo">
      <Photo image={images[image]} sizes="(max-width: 740px) 100vw, 700px" />
    </div>
  );
}
