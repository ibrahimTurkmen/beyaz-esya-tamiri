import {
  customerExperiences,
  publishableExperiences,
} from "@/content/customer-experiences";
import { business } from "@/lib/business";
import { Icon } from "./icon";
import { ExperienceSlider } from "./experience-slider";

export function CustomerExperiences() {
  // Filter on the server; only approved public fields reach the browser.
  const entries = publishableExperiences(customerExperiences).map(
    ({ id, name, appliance, summary }) => ({ id, name, appliance, summary }),
  );
  return (
    <section className="customer-panel" aria-labelledby="customer-panel-title">
      <p className="eyebrow">ŞEFFAF İLETİŞİM</p>
      {entries.length ? (
        <>
          <h2 id="customer-panel-title">
            Müşterilerimizin <span>deneyimleri.</span>
          </h2>
          <p className="experience-intro">
            Müşterilerimizin paylaştığı geri bildirimlerden hazırlanan deneyim
            özetleri.
          </p>
          <ExperienceSlider entries={entries} />
        </>
      ) : (
        <>
          <h2 id="customer-panel-title">
            Karar verirken
            <br />
            <span>doğru bilgiye bakın.</span>
          </h2>
          <p>
            Servis seçmeden önce işletmenin güncel bilgilerini, gerçek müşteri
            deneyimlerini ve işlem koşullarını inceleyin.
          </p>
          <div className="review-note">
            <Icon name="shield" size={24} />
            <span>
              İşlem ve ücret hakkında bilgi alın,
              <br />
              kararınızı açıklıkla verin.
            </span>
          </div>
        </>
      )}
      {business.googleUrl && (
        <a
          href={business.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Google’daki yorumları inceleyin <Icon name="arrow" size={17} />
        </a>
      )}
    </section>
  );
}
