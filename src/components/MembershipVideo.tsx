"use client";

import { useState } from "react";
import { Slot } from "./Slot";
import { PlayIcon } from "./icons";
import { membershipVideo } from "@/lib/site";

export function MembershipVideo() {
  const [playing, setPlaying] = useState(false);
  const { embedUrl, poster } = membershipVideo;

  if (playing && embedUrl) {
    return (
      <div className="video">
        <iframe
          src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
          title="Founders membership explainer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  return (
    <Slot className="video" src={poster.src} alt={poster.alt} note={poster.note} sizes="(max-width: 800px) 100vw, 800px">
      <button
        className="video__play"
        aria-label="Play the membership video"
        onClick={() => setPlaying(true)}
      >
        <PlayIcon />
      </button>
    </Slot>
  );
}
