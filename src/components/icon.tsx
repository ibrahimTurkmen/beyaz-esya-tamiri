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
  // WhatsApp's official website SVG mark, retrieved 2026-11-17.
  // https://www.whatsapp.com/ · https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/
  if (name === "chat")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 346 346"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className={className}
        style={style}
      >
        <path d="M173,0C77.45,0,0,77.45,0,173c0,31.43,8.38,60.91,23.04,86.31L0,346l89.87-21.25c24.67,13.54,53,21.25,83.13,21.25,95.55,0,173-77.45,173-173S268.55,0,173,0ZM173,315.01c-28.91,0-55.81-8.64-78.24-23.48l-53.1,13.52,14.89-50.75c-16.11-23.03-25.56-51.06-25.56-81.3,0-78.43,63.58-142.01,142.01-142.01s142.01,63.58,142.01,142.01-63.58,142.01-142.01,142.01Z" />
        <path d="M213.54,195.84l41.86,19.73c1.92.91,3.15,2.85,2.98,4.97-.45,5.51-2.66,16.55-12.56,26.44-27.93,27.93-78.09-3.67-80.13-4.89-12.34-6.63-24.06-15.49-35.17-26.61-11.11-11.11-19.98-22.84-26.61-35.17-1.22-2.04-32.82-52.19-4.89-80.13,9.9-9.9,20.93-12.1,26.44-12.56,2.12-.17,4.07,1.06,4.97,2.98l19.73,41.86c.93,1.98.52,4.33-1.02,5.88l-14.71,14.71c-3.18,3.18-4.12,8.13-1.92,12.06,5.37,9.63,12.59,18.9,20.95,27.43,8.53,8.36,17.8,15.58,27.43,20.95,3.93,2.19,8.88,1.26,12.06-1.92l14.71-14.71c1.55-1.55,3.9-1.96,5.88-1.02Z" />
      </svg>
    );
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
