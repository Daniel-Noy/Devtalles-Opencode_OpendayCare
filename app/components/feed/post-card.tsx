import { FeedPost } from "@/app/types/feed";
import { PostBadge } from "./post-badge";

interface PostCardProps {
  post: FeedPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-[20px] p-[20px_22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3.5">
        {post.avatarInitial ? (
          <div
            className="w-11 h-11 rounded-full font-fredoka font-semibold text-[17px] flex items-center justify-center shrink-0"
            style={{
              backgroundColor: post.avatarBgColor,
              color: post.avatarTextColor,
            }}
          >
            {post.avatarInitial}
          </div>
        ) : (
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
            style={{
              backgroundColor: post.avatarBgColor,
              color: post.avatarTextColor,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="font-fredoka font-semibold text-[16.5px] text-[#3F362E] leading-tight">
            {post.authorOrChildName}
          </div>
          <div className="text-[12.5px] text-[#A89A8B]">
            {post.timeAgo} · {post.publishedBy}
          </div>
        </div>

        <PostBadge category={post.category} />
      </div>

      {/* Audience */}
      <div className="text-[12.5px] text-[#A89A8B] mb-2.5">
        {post.audienceLabel}
      </div>

      {/* Content */}
      <p className="text-[15.5px] leading-[1.55] text-[#4A4038] m-0">
        {post.content}
      </p>

      {/* Attachment */}
      {post.attachment && post.attachment.type === "photo" && (
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-2 mt-3.5 border-[1.5px] border-dashed border-[#DBCDBA] rounded-2xl bg-[#F4ECE1] h-50 text-[#B0A290] transition-opacity hover:opacity-90"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
          </svg>
          <span className="text-[13.5px]">{post.attachment.label}</span>
        </a>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4.5 mt-4 pt-3.5 border-t border-[#F0E6D8]">
        <span className="flex items-center gap-1.75 text-[#E0654A] font-bold text-[14px]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="#E0654A"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          {post.likesCount}
        </span>

        <a
          href="#"
          className="flex items-center gap-1.75 text-[#94887B] font-bold text-[14px] hover:text-[#3F362E] transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
          </svg>
          {post.commentsCount}
        </a>

        <span className="flex-1" />

        <a
          href="#"
          className="text-[#C5503A] font-extrabold text-[14px] hover:underline"
        >
          Editar
        </a>
      </div>
    </article>
  );
}
