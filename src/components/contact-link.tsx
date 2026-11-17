"use client";
import type { ComponentProps } from "react";
type AnalyticsWindow = Window & {
  gtag?: (
    command: string,
    event: string,
    parameters: Record<string, string>,
  ) => void;
  dataLayer?: { push: (value: Record<string, string>) => unknown };
};
export function ContactLink({
  kind,
  context = "general",
  children,
  ...props
}: ComponentProps<"a"> & { kind: "phone" | "whatsapp"; context?: string }) {
  return (
    <a
      {...props}
      data-contact={kind}
      data-context={context}
      onClick={() => {
        // Use an existing, consent-managed analytics installation only. No SDK, cookie or personal data is added here.
        const analytics = window as AnalyticsWindow;
        const event = `${kind}_click`;
        const parameters = {
          contact_context: context,
          page_path: window.location.pathname,
        };
        try {
          if (typeof analytics.gtag === "function")
            analytics.gtag("event", event, parameters);
          else if (analytics.dataLayer)
            analytics.dataLayer.push({ event, ...parameters });
        } catch {
          /* Analytics must never prevent opening the contact link. */
        }
      }}
    >
      {children}
    </a>
  );
}
