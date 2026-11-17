"use client";
import { useState } from "react";
import { Icon } from "./icon";

export const serviceMapHref =
  "https://www.google.com/maps/@?api=1&map_action=map&center=40.797,29.366&zoom=12";

export function ServiceMap({ embedUrl }: { embedUrl?: string }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="service-map">
      {opened && embedUrl ? (
        <iframe
          title="Gebze, Darıca ve Çayırova hizmet bölgesi haritası"
          src={embedUrl}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="map-placeholder">
          <Icon name="pin" size={36} />
          <h3>Gebze · Darıca · Çayırova</h3>
          <p>Hizmet verdiğimiz ilçeleri Google Maps üzerinde inceleyin.</p>
          {embedUrl ? (
            <button
              className="button button-blue"
              onClick={() => setOpened(true)}
            >
              Google haritasını göster
            </button>
          ) : (
            <a
              className="button button-blue"
              href={serviceMapHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps’te aç <Icon name="arrow" size={18} />
            </a>
          )}
        </div>
      )}
      <div className="map-links" aria-label="Google Maps ilçe bağlantıları">
        {["Gebze", "Darıca", "Çayırova"].map((name) => (
          <a
            key={name}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Kocaeli`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name} ↗
          </a>
        ))}
      </div>
      <p className="map-caption">
        Hizmet bölgesi görünümü; işletme adresi değildir.
      </p>
    </div>
  );
}
