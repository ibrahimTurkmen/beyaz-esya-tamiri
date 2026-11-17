"use client";
import { Icon } from "./icon";
export function MobileMenu({ children }: { children: React.ReactNode }) {
  return (
    <details
      className="mobile-menu"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a"))
          event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Menüyü aç veya kapat">
        <Icon name="menu" />
      </summary>
      {children}
    </details>
  );
}
