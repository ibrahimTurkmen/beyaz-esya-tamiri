"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

export type PublicExperience = {
  id: string;
  name: string;
  appliance: string;
  summary: string;
};

export function ExperienceSlider({ entries }: { entries: PublicExperience[] }) {
  const trackId = useId();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  if (!entries.length) return null;

  function goTo(index: number) {
    const element = track.current;
    const next = Math.max(0, Math.min(entries.length - 1, index));
    const card = element?.children[next] as HTMLElement | undefined;
    const first = element?.firstElementChild as HTMLElement | null;
    if (!element || !card || !first) return;
    element.scrollTo({
      left: card.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  function onScroll() {
    const element = track.current;
    if (!element) return;
    const first = element.firstElementChild as HTMLElement;
    const closest = Array.from(element.children).reduce(
      (best, card, index) => {
        const distance = Math.abs(
          (card as HTMLElement).offsetLeft -
            first.offsetLeft -
            element.scrollLeft,
        );
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Infinity },
    );
    setActive(closest.index);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const targets: Record<string, number> = {
      ArrowLeft: active - 1,
      ArrowRight: active + 1,
      Home: 0,
      End: entries.length - 1,
    };
    const next = targets[event.key];
    if (next === undefined) return;
    event.preventDefault();
    goTo(next);
  }

  return (
    <div
      className="experience-slider"
      role="region"
      aria-roledescription="karusel"
      aria-label="Müşteri deneyimleri"
    >
      <div
        className="experience-track"
        role="group"
        id={trackId}
        ref={track}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        tabIndex={entries.length > 1 ? 0 : undefined}
        aria-label="Deneyim kartları; ok tuşlarıyla veya kaydırarak gezinin"
      >
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className="experience-card"
            role="group"
            aria-roledescription="slayt"
            aria-label={`${index + 1} / ${entries.length}: ${entry.name}`}
          >
            <span className="experience-kicker">MÜŞTERİ DENEYİMİ</span>
            <p>{entry.summary}</p>
            <div className="experience-person">
              <h3>{entry.name}</h3>
              <span>{entry.appliance}</span>
            </div>
          </div>
        ))}
      </div>
      {entries.length > 1 && (
        <div className="experience-controls">
          <span
            className="experience-count"
            aria-live="polite"
            aria-atomic="true"
          >
            {active + 1} / {entries.length}
          </span>
          <div>
            <button
              type="button"
              aria-label="Önceki müşteri deneyimi"
              aria-controls={trackId}
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Sonraki müşteri deneyimi"
              aria-controls={trackId}
              onClick={() => goTo(active + 1)}
              disabled={active === entries.length - 1}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
