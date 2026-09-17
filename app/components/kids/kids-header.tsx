export function KidsHeader() {
  return (
    <div className="flex items-end justify-between gap-4 mb-5.5">
      <div>
        <div className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C] mb-1">
          GESTIÓN
        </div>
        <h1 className="font-fredoka font-semibold text-[30px] text-[#3F362E] m-0">
          Niños
        </h1>
      </div>

      <a
        href="#"
        className="flex items-center gap-2 px-4.5 py-2.75 rounded-[14px] bg-linear-to-b from-[#F4977E] to-[#EE8164] text-white font-extrabold text-[14.5px] shadow-[0_8px_18px_-8px_rgba(238,129,100,0.7)] transition-transform hover:-translate-y-0.5"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Agregar niño
      </a>
    </div>
  );
}
