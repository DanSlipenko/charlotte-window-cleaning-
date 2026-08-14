"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { reviews } from "@/lib/site";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const go = (n: number) => setIndex((n + reviews.length) % reviews.length);

  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Reviews</span>
          <h2 className="h2">What Charlotte says</h2>
        </div>

        <div className="reviews__stage" aria-live="polite">
          {reviews.map((review, i) => (
            <article key={review.name} className="review" data-active={i === index}>
              <div className="review__name">{review.name}</div>
              <div className="review__meta">{review.meta}</div>
              <div className="review__stars" aria-label={`${review.stars} out of 5 stars`}>
                {"★".repeat(review.stars)}
              </div>
              <blockquote>{review.quote}</blockquote>
            </article>
          ))}
        </div>

        <div className="reviews__nav">
          <button className="rbtn" aria-label="Previous review" onClick={() => go(index - 1)}>
            <ChevronLeftIcon />
          </button>
          <div className="dots" role="group" aria-label="Choose review">
            {reviews.map((review, i) => (
              <button
                key={review.name}
                className="dot"
                aria-label={`Review ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button className="rbtn" aria-label="Next review" onClick={() => go(index + 1)}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
