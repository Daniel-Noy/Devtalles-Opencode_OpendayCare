import { LinkedParent } from "@/app/types/kids";

interface LinkedParentsCardProps {
  linkedParents: LinkedParent[];
}

export function LinkedParentsCard({ linkedParents }: LinkedParentsCardProps) {
  return (
    <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl p-[16px_18px]">
      <div className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D] mb-3.5">
        PADRES VINCULADOS
      </div>

      <div className="flex flex-col gap-3.5">
        {linkedParents.map((parent) => (
          <div key={parent.id} className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-fredoka font-semibold text-[16px] shrink-0"
              style={{ backgroundColor: parent.avatarBgColor }}
            >
              {parent.initial}
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-extrabold text-[14.5px] text-[#3F362E] truncate">
                {parent.name}
              </div>
              <div className="text-[12.5px] text-[#A89A8B] truncate">
                {parent.relation}
              </div>
            </div>

            {parent.status === "active" ? (
              <span className="shrink-0 text-[10.5px] font-extrabold px-2.25 py-1 rounded-full bg-[#CFEBD8] text-[#3E9B6C]">
                ACTIVA
              </span>
            ) : (
              <span className="shrink-0 text-[10.5px] font-extrabold px-2.25 py-1 rounded-full bg-[#F7E7A6] text-[#9A7B1E]">
                PENDIENTE
              </span>
            )}
          </div>
        ))}

        {/* Vincular otro padre */}
        <a
          href="#"
          className="flex items-center gap-3 pt-2 hover:opacity-85 transition-opacity"
        >
          <span className="w-10 h-10 rounded-full border-[1.5px] border-dashed border-[#D8CBBA] flex items-center justify-center text-[#B0A290] shrink-0">
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
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <span className="font-extrabold text-[14.5px] text-[#C5503A]">
            Vincular otro padre
          </span>
        </a>
      </div>
    </div>
  );
}
