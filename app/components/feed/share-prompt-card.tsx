interface SharePromptCardProps {
  initial: string;
}

export function SharePromptCard({ initial }: SharePromptCardProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-3.5 bg-[#FFFDF9] border border-[#ECE0D0] rounded-[18px] p-[14px_18px] mb-6 shadow-[0_4px_14px_-10px_rgba(120,90,60,0.4)] transition-transform hover:-translate-y-0.5"
    >
      <div className="w-10 h-10 rounded-full bg-[#F2937A] text-white font-fredoka font-semibold text-[16px] flex items-center justify-center shrink-0">
        {initial}
      </div>
      <span className="flex-1 text-[#A89A8B] text-[15px]">
        Compartí un momento…
      </span>
      <span className="w-9.5 height-[38px] h-9.5 rounded-xl bg-[#FBE3D8] text-[#E0654A] flex items-center justify-center shrink-0">
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      </span>
    </a>
  );
}
