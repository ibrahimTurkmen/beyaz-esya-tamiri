import type { CSSProperties } from "react";
export function Icon({
  name,
  size = 24,
  className = "",
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </>
    ),
    phone: (
      <path d="m8 3 3 5-3 3c1.5 3 2.5 4 5 5l3-3 5 3c-1 4-3 5-6 4C8 18 4 14 3 7c0-3 2-4 5-4Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    shield: (
      <>
        <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 2v6m10-6v6M3 11h18m-14 4h2m6 0h2m-10 3h2" />
      </>
    ),
    tool: (
      <>
        <path d="m14 7 3 3 4-4a6 6 0 0 1-8 8l-7 7-3-3 7-7a6 6 0 0 1 8-8Z" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M2 21v-4a7 7 0 0 1 14 0v4m1-17a3 3 0 0 1 0 6m3 11v-4a5 5 0 0 0-3-5" />
      </>
    ),
    headphones: (
      <>
        <path d="M3 14v-3a9 9 0 0 1 18 0v3m0 4c0 4-4 4-7 4" />
        <rect x="2" y="11" width="4" height="8" rx="2" />
        <rect x="18" y="11" width="4" height="8" rx="2" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    washer: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 7h16m-12-2h3m5 0h1" />
        <circle cx="12" cy="14" r="5" />
        <path d="M8 14c3-3 5 3 8 0" />
      </>
    ),
    dryer: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 7h16m-12-2h3m5 0h1" />
        <circle cx="12" cy="14" r="5" />
        <path d="m10 12 4 4m0-4-4 4" />
      </>
    ),
    fridge: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M5 10h14M8 5v3m0 5v4" />
      </>
    ),
    dishwasher: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 7h16m-12-2h4m4 0h1M8 11v7m4-7v7m4-7v7M7 19h10" />
      </>
    ),
    oven: (
      <>
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path d="M3 7h18M7 5h1m3 0h2m3 0h1" />
        <rect x="6" y="10" width="12" height="9" rx="1" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11a9 9 0 0 1-13 8l-6 2 2-6a9 9 0 1 1 17-4Z" />
        <path d="m8 7 2 3-1 1 3 3 1-1 3 1" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name] || paths.tool}
    </svg>
  );
}
