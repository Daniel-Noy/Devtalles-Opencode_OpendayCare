export type PostCategory = "milestone" | "activity" | "announcement";

export interface EducatorProfile {
  name: string;
  initial: string;
  role: string;
  roomName: string;
}

export interface RoomInfo {
  centerName: string;
  name: string;
  dateLabel: string;
  childrenCount: number;
}

export interface PostAttachment {
  type: "photo";
  label: string;
  url?: string;
}

export interface FeedPost {
  id: string;
  category: PostCategory;
  authorOrChildName: string;
  avatarInitial?: string;
  avatarBgColor: string;
  avatarTextColor: string;
  timeAgo: string;
  publishedBy: string;
  audienceLabel: string;
  content: string;
  attachment?: PostAttachment;
  likesCount: number;
  commentsCount: number;
}
