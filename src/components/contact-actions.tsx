import { business, phoneLabel } from "@/lib/business";
import { whatsappHref } from "@/lib/contact";
import { ContactLink } from "./contact-link";
import { Icon } from "./icon";
export function ContactButton({
  secondary = false,
  label,
  context,
}: {
  secondary?: boolean;
  label?: string;
  context?: string;
}) {
  if (!business.phone) return null;
  return (
    <ContactLink
      kind="phone"
      context={context}
      className={`button ${secondary ? "button-outline" : "button-blue"}`}
      href={`tel:${business.phone}`}
    >
      <Icon name="phone" size={19} />
      {label || phoneLabel}
    </ContactLink>
  );
}
export function WhatsAppButton({
  context,
  label = "WhatsApp’tan Yazın",
  compact = false,
}: {
  context?: string;
  label?: string;
  compact?: boolean;
}) {
  if (!business.whatsapp) return null;
  return (
    <ContactLink
      kind="whatsapp"
      context={context}
      href={whatsappHref(business.whatsapp, context)}
      className={compact ? "whatsapp" : "button button-whatsapp"}
      aria-label={compact ? "WhatsApp ile iletişim" : undefined}
    >
      <Icon name="chat" size={compact ? 24 : 20} />
      {!compact && label}
    </ContactLink>
  );
}
export function ContactActions({ context }: { context?: string }) {
  return (
    <div className="contact-actions">
      <ContactButton context={context} />
      <WhatsAppButton context={context} />
    </div>
  );
}
