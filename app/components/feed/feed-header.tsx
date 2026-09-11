import { RoomInfo } from "@/app/types/feed";

interface FeedHeaderProps {
  greetingName: string;
  room: RoomInfo;
}

export function FeedHeader({ greetingName, room }: FeedHeaderProps) {
  return (
    <header className="mb-6">
      <div className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#D9583C] mb-1">
        {room.centerName} · {room.name}
      </div>
      <h1 className="font-fredoka font-semibold text-[30px] m-0 text-[#3F362E] leading-tight">
        Buenas, {greetingName}
      </h1>
      <p className="mt-1.25 mb-0 text-[#94887B] text-[14.5px]">
        {room.childrenCount} niños · {room.dateLabel}
      </p>
    </header>
  );
}
