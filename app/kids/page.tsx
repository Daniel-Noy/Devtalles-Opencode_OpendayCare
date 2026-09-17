import { Sidebar } from "@/app/components/shared/sidebar";
import { KidsHeader } from "@/app/components/kids/kids-header";
import { KidCard } from "@/app/components/kids/kid-card";
import { mockEducatorProfile, mockRoomInfo } from "@/app/data/feed.mock";
import { mockKidsList } from "@/app/data/kids.mock";

export default function KidsPage() {
  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      {/* Barra lateral */}
      <Sidebar
        educator={mockEducatorProfile}
        room={mockRoomInfo}
        activeNav="kids"
      />

      {/* Contenido principal del listado */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-220 w-full mx-auto p-[34px_40px_80px]">
          {/* Cabecera */}
          <KidsHeader />

          {/* Barra de búsqueda estática */}
          <div className="flex items-center gap-2.75 bg-[#FFFDF9] border border-[#ECE0D0] rounded-[14px] p-[12px_16px] mb-5.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B0A290"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Buscar niño…"
              readOnly
              className="flex-1 border-none bg-transparent text-[15px] text-[#3F362E] outline-none"
            />
          </div>

          {/* Indicador de sala */}
          <div className="flex items-center gap-3 mb-3.5">
            <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#3F362E]">
              {mockRoomInfo.name}
            </span>
            <span className="text-[13px] text-[#A89A8B]">
              {mockKidsList.length} niños
            </span>
            <span className="flex-1 h-px bg-[#E7DAC8]" />
          </div>

          {/* Cuadrícula de niños */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {mockKidsList.map((kid) => (
              <KidCard key={kid.id} kid={kid} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
