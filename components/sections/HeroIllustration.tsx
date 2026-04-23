export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg" aria-hidden="true">
      {/* Outer decorative circle */}
      <div className="absolute inset-0 rounded-full bg-gold/5 scale-110" />

      <svg
        viewBox="0 0 400 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full drop-shadow-xl"
        aria-hidden="true"
        role="img"
      >
        {/* Background circle */}
        <circle cx="200" cy="200" r="180" fill="#F7F4EF" />
        <circle cx="200" cy="200" r="160" fill="white" fillOpacity="0.6" />

        {/* Nest curves (3 arcs, inspired by logo) */}
        <path
          d="M 80 280 Q 200 240 320 280"
          stroke="#B8975A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 60 295 Q 200 250 340 295"
          stroke="#B8975A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
        <path
          d="M 45 310 Q 200 262 355 310"
          stroke="#B8975A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />

        {/* House body */}
        <rect
          x="130"
          y="190"
          width="140"
          height="100"
          rx="4"
          fill="#4A4A4A"
        />

        {/* House roof */}
        <polygon
          points="115,195 200,120 285,195"
          fill="#B8975A"
        />

        {/* Roof ridge highlight */}
        <polygon
          points="115,195 200,120 210,120 120,195"
          fill="rgba(255,255,255,0.15)"
        />

        {/* Chimney */}
        <rect x="238" y="132" width="18" height="36" rx="2" fill="#4A4A4A" />

        {/* Door */}
        <rect x="182" y="240" width="36" height="50" rx="3" fill="#B8975A" opacity="0.9" />
        {/* Door knob */}
        <circle cx="212" cy="267" r="3" fill="white" opacity="0.8" />

        {/* Left window */}
        <rect x="145" y="210" width="30" height="28" rx="3" fill="white" opacity="0.85" />
        <line x1="160" y1="210" x2="160" y2="238" stroke="#E8E5E0" strokeWidth="1.5" />
        <line x1="145" y1="224" x2="175" y2="224" stroke="#E8E5E0" strokeWidth="1.5" />

        {/* Right window */}
        <rect x="225" y="210" width="30" height="28" rx="3" fill="white" opacity="0.85" />
        <line x1="240" y1="210" x2="240" y2="238" stroke="#E8E5E0" strokeWidth="1.5" />
        <line x1="225" y1="224" x2="255" y2="224" stroke="#E8E5E0" strokeWidth="1.5" />

        {/* Ground / path */}
        <ellipse cx="200" cy="295" rx="90" ry="10" fill="#E8E5E0" opacity="0.5" />

        {/* Decorative dots */}
        <circle cx="80" cy="140" r="6" fill="#B8975A" opacity="0.3" />
        <circle cx="90" cy="155" r="3" fill="#B8975A" opacity="0.2" />
        <circle cx="320" cy="150" r="8" fill="#B8975A" opacity="0.25" />
        <circle cx="308" cy="168" r="4" fill="#B8975A" opacity="0.15" />
        <circle cx="335" cy="170" r="3" fill="#B8975A" opacity="0.15" />

        {/* Sparkle stars */}
        <g opacity="0.6">
          <path d="M 68 108 L 70 102 L 72 108 L 78 110 L 72 112 L 70 118 L 68 112 L 62 110 Z" fill="#B8975A" />
        </g>
        <g opacity="0.4">
          <path d="M 328 100 L 330 95 L 332 100 L 337 102 L 332 104 L 330 109 L 328 104 L 323 102 Z" fill="#B8975A" />
        </g>

        {/* Checkmark badge (trust signal) */}
        <circle cx="290" cy="178" r="22" fill="#B8975A" />
        <path
          d="M 281 178 L 287 185 L 300 170"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
