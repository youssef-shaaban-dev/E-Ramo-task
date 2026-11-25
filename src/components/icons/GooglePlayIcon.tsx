export default function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
      <path
        d="M3.18 1.07A1 1 0 0 0 2 2v20a1 1 0 0 0 1.52.85l17-10a1 1 0 0 0 0-1.7l-17-10a1 1 0 0 0-.34-.08Z"
        fill="url(#gp-grad)"
      />
      <defs>
        <linearGradient id="gp-grad" x1="2" y1="12" x2="21.52" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C6FF" />
          <stop offset="0.33" stopColor="#00E676" />
          <stop offset="0.66" stopColor="#FFD600" />
          <stop offset="1" stopColor="#FF5252" />
        </linearGradient>
      </defs>
    </svg>
  );
}

