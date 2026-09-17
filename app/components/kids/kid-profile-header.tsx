import Link from "next/link";
import { KidProfile } from "@/app/types/kids";

interface KidProfileHeaderProps {
  kid: KidProfile;
}

export function KidProfileHeader({ kid }: KidProfileHeaderProps) {
  return (
    <div>
      {/* Volver a Niños */}
      <Link
        href="/kids"
        className="inline-flex items-center gap-1.75 text-[#94887B] font-bold text-[14px] mb-5 hover:text-[#3F362E] transition-colors"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Volver a Niños
      </Link>

      {/* Datos del niño */}
      <div className="flex items-center gap-4.5">
        <div
          className="w-21 h-21 rounded-full flex items-center justify-center shrink-0 font-fredoka font-semibold text-[34px]"
          style={{
            backgroundColor: kid.avatarBgColor,
            color: kid.avatarTextColor,
          }}
        >
          {kid.initial}
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="font-fredoka font-semibold text-[28px] text-[#3F362E] m-0 truncate">
            {kid.name}
          </h1>
          <p className="mt-0.75 text-[15px] text-[#94887B]">
            {kid.age} años · {kid.roomName}
          </p>
        </div>

        <a
          href="#"
          className="border border-[#ECE0D0] bg-[#FFFDF9] text-[#6E6359] font-bold text-[14px] px-4 py-2.25 rounded-xl hover:bg-[#F8EFE4] transition-colors shrink-0"
        >
          Editar
        </a>
      </div>
    </div>
  );
}
