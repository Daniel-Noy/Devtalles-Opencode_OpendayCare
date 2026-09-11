import { FeedHeader } from "@/app/components/feed/feed-header";
import { PostCard } from "@/app/components/feed/post-card";
import { SharePromptCard } from "@/app/components/feed/share-prompt-card";
import { Sidebar } from "@/app/components/feed/sidebar";
import {
  mockEducatorProfile,
  mockFeedPosts,
  mockRoomInfo,
} from "@/app/data/feed.mock";

export default function Home() {
  const educatorFirstName = mockEducatorProfile.name.split(" ")[0];

  return (
    <div className="flex min-h-screen bg-[#F6ECDF]">
      {/* Barra lateral */}
      <Sidebar educator={mockEducatorProfile} room={mockRoomInfo} />

      {/* Contenido principal del feed */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto">
        <div className="max-w-190 w-full mx-auto p-[34px_40px_80px]">
          <FeedHeader
            greetingName={educatorFirstName}
            room={mockRoomInfo}
          />

          <SharePromptCard initial={mockEducatorProfile.initial} />

          {/* Separador de sección */}
          <div className="flex items-center gap-3.5 mb-3.5">
            <span className="text-[12.5px] font-extrabold tracking-[0.8px] text-[#8A7C6D]">
              PUBLICADO HOY
            </span>
            <span className="flex-1 h-px bg-[#E7DAC8]" />
          </div>

          {/* Lista de publicaciones */}
          <div className="flex flex-col gap-4">
            {mockFeedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
