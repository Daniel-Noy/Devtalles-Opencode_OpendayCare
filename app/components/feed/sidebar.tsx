import { EducatorProfile, RoomInfo } from "@/app/types/feed";

interface SidebarProps {
  educator: EducatorProfile;
  room: RoomInfo;
}

export function Sidebar({ educator, room }: SidebarProps) {
  return (
    <aside className="w-62 shrink-0 bg-[#FFFDF9] border-r border-[#ECE0D0] flex flex-col p-[24px_16px] sticky top-0 h-screen">
      {/* Brand Header */}
      <a
        href="#"
        className="flex items-center gap-2.75 p-[4px_8px_22px]"
      >
        <div className="w-9.5 h-9.5 rounded-xl bg-linear-to-br from-[#F8C3A8] to-[#F2937A] flex items-center justify-center shrink-0">
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </div>
        <div>
          <div className="font-fredoka font-semibold text-[17px] text-[#3F362E] leading-none">
            OpenDayCare
          </div>
          <div className="text-[11.5px] text-[#A89A8B] mt-0.5">
            Sala {room.name.replace("SALA ", "").trim() || educator.roomName}
          </div>
        </div>
      </a>

      {/* New Post Button */}
      <a
        href="#"
        className="flex items-center justify-center gap-2 w-full p-3 rounded-[14px] bg-linear-to-b from-[#F4977E] to-[#EE8164] text-white font-extrabold text-[14.5px] shadow-[0_8px_18px_-8px_rgba(238,129,100,0.75)] mb-4.5 transition-transform hover:-translate-y-0.5"
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
        Nueva publicación
      </a>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-1 flex-1">
        <a
          href="#"
          className="flex items-center gap-3 p-[11px_12px] rounded-xl bg-[#FBE3D8] text-[#D9583C] font-extrabold text-[14.5px]"
        >
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
            <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
          </svg>
          Feed
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-[11px_12px] rounded-xl bg-transparent text-[#6E6359] font-semibold text-[14.5px] hover:bg-[#F8EFE4] transition-colors"
        >
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
            <circle cx="9" cy="7" r="3" />
            <circle cx="17" cy="9" r="2.4" />
            <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
          </svg>
          Niños
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-[11px_12px] rounded-xl bg-transparent text-[#6E6359] font-semibold text-[14.5px] hover:bg-[#F8EFE4] transition-colors"
        >
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
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
          Avisos
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-[11px_12px] rounded-xl bg-transparent text-[#6E6359] font-semibold text-[14.5px] hover:bg-[#F8EFE4] transition-colors"
        >
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
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Mi cuenta
        </a>
      </nav>

      {/* Educator Profile Footer */}
      <div className="border-t border-[#ECE0D0] pt-3.5 mt-2.5">
        <div className="flex items-center gap-2.75 p-[6px_8px]">
          <div className="w-9.5 h-9.5 rounded-full bg-[#F2937A] text-white font-fredoka font-semibold text-[16px] flex items-center justify-center shrink-0">
            {educator.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-extrabold text-[14px] text-[#3F362E] truncate">
              {educator.name}
            </div>
            <div className="text-[12px] text-[#A89A8B] truncate">
              {educator.role} · {educator.roomName}
            </div>
          </div>
          <a
            href="#"
            title="Cerrar sesión"
            className="shrink-0 w-8 h-8 rounded-[10px] bg-[#F6ECDF] text-[#94887B] flex items-center justify-center hover:text-[#3F362E] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
