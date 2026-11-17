import {
  customerExperiences,
  publishableExperiences,
} from "@/content/customer-experiences";

export function CustomerExperiences() {
  const entries = publishableExperiences(customerExperiences);
  if (!entries.length) return null;
  return (
    <section
      className="container experiences-section"
      aria-labelledby="experiences-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">ONARIM SONRASI DENEYİMLER</p>
          <h2 id="experiences-title">Müşterilerimizin deneyimleri</h2>
        </div>
      </div>
      <p className="experience-intro">
        Müşterilerimizin paylaştığı geri bildirimlerden hazırlanan deneyim
        özetleri.
      </p>
      <div className="experience-grid">
        {entries.map((entry) => (
          <article key={entry.id} className="experience-card">
            <p>{entry.summary}</p>
            <div>
              <h3>{entry.name}</h3>
              <span>{entry.appliance}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
