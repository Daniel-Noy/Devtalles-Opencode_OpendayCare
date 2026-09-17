import { notFound } from "next/navigation";
import { Sidebar } from "@/app/components/shared/sidebar";
import { KidProfileHeader } from "@/app/components/kids/kid-profile-header";
import { AllergyCard } from "@/app/components/kids/allergy-card";
import { KidInfoCard } from "@/app/components/kids/kid-info-card";
import { LinkedParentsCard } from "@/app/components/kids/linked-parents-card";
import { mockEducatorProfile, mockRoomInfo } from "@/app/data/feed.mock";
import { getKidProfileById } from "@/app/data/kids.mock";

interface KidProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function KidProfilePage({ params }: KidProfilePageProps) {
  const { id } = await params;
  const kid = getKidProfileById(id);

  if (!kid) {
    notFound();
  }

  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      {/* Barra lateral */}
      <Sidebar
        educator={mockEducatorProfile}
        room={mockRoomInfo}
        activeNav="kids"
      />

      {/* Contenido principal del perfil */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-[820px] w-full mx-auto p-[34px_40px_80px]">
          <div className="flex gap-6.5 items-start flex-wrap">
            {/* Columna izquierda: Encabezado, Alergias e Información */}
            <div className="flex-1 min-w-[300px] flex flex-col gap-4.5">
              <KidProfileHeader kid={kid} />
              <AllergyCard allergies={kid.allergies} />
              <KidInfoCard generalInfo={kid.generalInfo} />
            </div>

            {/* Columna derecha: Resumen del día y Padres vinculados */}
            <div className="w-[300px] shrink-0 flex flex-col gap-3.5">
              <a
                href="#"
                className="flex items-center justify-center gap-2.25 w-full p-3.25 rounded-[14px] bg-[#3F362E] text-white font-extrabold text-[15px] hover:bg-[#2A241F] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
                Resumen del día
              </a>

              <LinkedParentsCard linkedParents={kid.linkedParents} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
