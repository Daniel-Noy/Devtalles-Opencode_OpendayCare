import React from "react";

export function AuthHeroPanel() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(155deg,#F6A98E_0%,#F2937A_45%,#EC7E62_100%)] flex flex-col justify-between p-8 sm:p-12 lg:p-14 text-white min-h-[380px] lg:min-h-screen">
      {/* Decorative circles */}
      <div className="absolute w-105 h-105 rounded-full bg-white/12 -top-35 -right-30 pointer-events-none" />
      <div className="absolute w-75 h-75 rounded-full bg-white/10 -bottom-27.5 -left-20 pointer-events-none" />

      {/* Brand logo */}
      <div className="relative flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </div>
        <span className="font-fredoka font-semibold text-xl tracking-wide">
          OpenDayCare
        </span>
      </div>

      {/* Main hero message */}
      <div className="relative my-8 lg:my-0">
        <h1 className="font-fredoka font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          El día de cada niño,
          <br />
          compartido con su familia.
        </h1>
        <p className="text-base lg:text-lg leading-relaxed max-w-md text-white/90">
          Publicá momentos, gestioná las salas y mantené a las familias cerca, desde un solo lugar.
        </p>
      </div>

      {/* Bottom room metadata */}
      <div className="relative text-sm text-white/90 font-medium">
        🌿 Guardería Sala Soles
      </div>
    </div>
  );
}
