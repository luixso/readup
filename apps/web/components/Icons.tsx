/** Iconos de trazo fino (estilo Lucide) para la navegación. */
const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const HomeIcon = () => (
  <svg {...base}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
);
export const BookIcon = () => (
  <svg {...base}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 19.5V4.5" /></svg>
);
export const TerminalIcon = () => (
  <svg {...base}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3" /><path d="M13 15h4" /></svg>
);
export const RuleIcon = () => (
  <svg {...base}><path d="M4 6h16M4 12h10M4 18h7" /></svg>
);
export const RepeatIcon = () => (
  <svg {...base}><path d="M17 2l4 4-4 4" /><path d="M3 11V9a3 3 0 0 1 3-3h15" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v2a3 3 0 0 1-3 3H3" /></svg>
);
export const FlameIcon = ({ size = 18 }: { size?: number }) => (
  <svg {...base} width={size} height={size}>
    <path d="M12 22c4 0 7-2.7 7-6.6 0-3.5-2.3-5.6-4-7.4-.4 2-1.4 3.3-2.7 3.9C12.7 8.6 11.6 5 9 2c0 4-4 6.5-4 11.4C5 19.3 8 22 12 22z" />
  </svg>
);
export const UserIcon = () => (
  <svg {...base} width={20} height={20}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
);
