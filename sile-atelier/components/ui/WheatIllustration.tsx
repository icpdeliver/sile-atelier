interface WheatProps {
  className?: string;
  color?: string;
}

export default function WheatIllustration({
  className = "",
  color = "currentColor",
}: WheatProps) {
  return (
    <svg
      viewBox="0 0 40 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main stem */}
      <line x1="20" y1="78" x2="20" y2="5" stroke={color} strokeWidth="0.8" />

      {/* Left grains */}
      <ellipse
        cx="13" cy="38" rx="5.2" ry="2.8"
        transform="rotate(-28 13 38)"
        stroke={color} strokeWidth="0.7" fill="none"
      />
      <ellipse
        cx="11" cy="27" rx="5" ry="2.6"
        transform="rotate(-22 11 27)"
        stroke={color} strokeWidth="0.7" fill="none"
      />
      <ellipse
        cx="12.5" cy="17" rx="4.5" ry="2.4"
        transform="rotate(-16 12.5 17)"
        stroke={color} strokeWidth="0.7" fill="none"
      />

      {/* Right grains */}
      <ellipse
        cx="27" cy="35" rx="5.2" ry="2.8"
        transform="rotate(28 27 35)"
        stroke={color} strokeWidth="0.7" fill="none"
      />
      <ellipse
        cx="29" cy="24" rx="5" ry="2.6"
        transform="rotate(22 29 24)"
        stroke={color} strokeWidth="0.7" fill="none"
      />
      <ellipse
        cx="27.5" cy="14" rx="4.5" ry="2.4"
        transform="rotate(16 27.5 14)"
        stroke={color} strokeWidth="0.7" fill="none"
      />

      {/* Top grain */}
      <ellipse
        cx="20" cy="8" rx="3.8" ry="2.4"
        stroke={color} strokeWidth="0.7" fill="none"
      />
    </svg>
  );
}
