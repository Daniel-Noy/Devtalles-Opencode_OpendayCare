import Link from "next/link";
import { KidListItem } from "@/app/types/kids";

interface KidCardProps {
  kid: KidListItem;
}

export function KidCard({ kid }: KidCardProps) {
  return (
    <Link
      href={`/kids/${kid.id}`}
      className="flex items-center gap-3.5 min-w-0 bg-[#FFFDF9] border border-[#ECE0D0] rounded-[18px] p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,0.5)] transition-all duration-150 hover:border-[#F2A78E] hover:-translate-y-0.5"
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-fredoka font-semibold text-[19px]"
        style={{ backgroundColor: kid.avatarBgColor, color: kid.avatarTextColor }}
      >
        {kid.initial}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="font-fredoka font-semibold text-[16px] text-[#3F362E] truncate">
          {kid.name}
        </div>
        <div className="text-[13px] text-[#A89A8B] truncate">
          {kid.age} años · {kid.parentsCountLabel}
        </div>
      </div>

      {/* Badge or Chevron */}
      {kid.badge ? (
        <span
          className="shrink-0 text-[11px] font-extrabold px-2.25 py-1 rounded-full"
          style={{
            backgroundColor: kid.badge.bgColor,
            color: kid.badge.textColor,
          }}
        >
          {kid.badge.label}
        </span>
      ) : (
        <svg
          className="shrink-0 text-[#CBB89F]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </Link>
  );
}
