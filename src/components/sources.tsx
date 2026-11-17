import { sources, type SourceKey } from "@/lib/sources";
export function Sources({ items }: { items: readonly SourceKey[] }) {
  if (!items.length) return null;
  return (
    <aside className="source-notes" aria-label="Teknik kaynaklar">
      <h2>Teknik kaynaklar</h2>
      <p>
        Üretici açıklamaları kontrol edilerek hazırlanmıştır. Kodlar ve
        kullanıcı bakım adımları modele göre değişebilir; kendi cihazınızın
        kılavuzunu esas alın.
      </p>
      <ul>
        {items.map((key) => (
          <li key={key}>
            <a
              href={sources[key].url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {sources[key].title} ↗
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
