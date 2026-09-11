import { PostCategory } from "@/app/types/feed";

interface PostBadgeProps {
  category: PostCategory;
}

interface BadgeConfig {
  label: string;
  bgColor: string;
  dotColor: string;
  textColor: string;
}

const BADGE_CONFIGS: Record<PostCategory, BadgeConfig> = {
  milestone: {
    label: "LOGRO",
    bgColor: "#CFEBD8",
    dotColor: "#3E9B6C",
    textColor: "#3E9B6C",
  },
  activity: {
    label: "ACTIVIDAD",
    bgColor: "#C7E7F1",
    dotColor: "#2E89A6",
    textColor: "#2E89A6",
  },
  announcement: {
    label: "ANUNCIO",
    bgColor: "#CCD8F4",
    dotColor: "#4E72C8",
    textColor: "#4E72C8",
  },
};

export function PostBadge({ category }: PostBadgeProps) {
  const config = BADGE_CONFIGS[category];

  return (
    <div
      className="inline-flex items-center gap-1.75 px-3 py-1.5 rounded-full"
      style={{ backgroundColor: config.bgColor }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: config.dotColor }}
      />
      <span
        className="text-[12px] font-extrabold tracking-[0.5px]"
        style={{ color: config.textColor }}
      >
        {config.label}
      </span>
    </div>
  );
}
