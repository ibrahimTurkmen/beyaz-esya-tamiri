"use client";
import { usePathname } from "next/navigation";
import { routeContactContext, whatsappHref } from "@/lib/contact";
import { ContactLink } from "./contact-link";
import { Icon } from "./icon";
export function MobileContact({
  phone,
  whatsapp,
}: {
  phone: string;
  whatsapp: string;
}) {
  const context = routeContactContext(usePathname());
  return (
    <div className="mobile-cta" aria-label="Hızlı iletişim">
      {phone && (
        <ContactLink
          kind="phone"
          context={context}
          href={`tel:${phone}`}
          className="button button-blue"
        >
          <Icon name="phone" size={19} />
          Hemen Ara
        </ContactLink>
      )}
      {whatsapp && (
        <ContactLink
          kind="whatsapp"
          context={context}
          href={whatsappHref(whatsapp, context)}
          className="button button-whatsapp"
        >
          <Icon name="chat" size={20} />
          WhatsApp
        </ContactLink>
      )}
    </div>
  );
}
