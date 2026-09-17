import { KidGeneralInfo } from "@/app/types/kids";

interface KidInfoCardProps {
  generalInfo: KidGeneralInfo;
}

export function KidInfoCard({ generalInfo }: KidInfoCardProps) {
  return (
    <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-2xl overflow-hidden">
      <div className="flex justify-between items-center p-[15px_18px] border-b border-[#F0E6D8]">
        <span className="text-[#94887B] text-[14.5px]">Fecha de nacimiento</span>
        <span className="font-extrabold text-[#3F362E] text-[14.5px]">
          {generalInfo.birthDate}
        </span>
      </div>
      <div className="flex justify-between items-center p-[15px_18px] border-b border-[#F0E6D8]">
        <span className="text-[#94887B] text-[14.5px]">Sala</span>
        <span className="font-extrabold text-[#3F362E] text-[14.5px]">
          {generalInfo.roomName}
        </span>
      </div>
      <div className="flex justify-between items-center p-[15px_18px]">
        <span className="text-[#94887B] text-[14.5px]">Ingreso</span>
        <span className="font-extrabold text-[#3F362E] text-[14.5px]">
          {generalInfo.enrollmentDate}
        </span>
      </div>
    </div>
  );
}
