import { EducatorProfile, FeedPost, RoomInfo } from "../types/feed";

export const mockEducatorProfile: EducatorProfile = {
  name: "Caro Giménez",
  initial: "C",
  role: "Maestra",
  roomName: "Soles",
};

export const mockRoomInfo: RoomInfo = {
  centerName: "GUARDERÍA",
  name: "SALA SOLES",
  dateLabel: "martes 17 jun",
  childrenCount: 12,
};

export const mockFeedPosts: FeedPost[] = [
  {
    id: "post-1",
    category: "milestone",
    authorOrChildName: "Mateo",
    avatarInitial: "M",
    avatarBgColor: "#A9D9E8",
    avatarTextColor: "#1F7A93",
    timeAgo: "14:20",
    publishedBy: "publicado por vos",
    audienceLabel: "Para: familia de Mateo",
    content: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
    likesCount: 3,
    commentsCount: 1,
  },
  {
    id: "post-2",
    category: "activity",
    authorOrChildName: "Mateo",
    avatarInitial: "M",
    avatarBgColor: "#A9D9E8",
    avatarTextColor: "#1F7A93",
    timeAgo: "09:40",
    publishedBy: "publicado por vos",
    audienceLabel: "Para: familia de Mateo",
    content: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
    attachment: {
      type: "photo",
      label: "Foto · pintando con témperas",
      url: "#",
    },
    likesCount: 5,
    commentsCount: 2,
  },
  {
    id: "post-3",
    category: "announcement",
    authorOrChildName: "Anuncio general",
    avatarBgColor: "#CCD8F4",
    avatarTextColor: "#4E72C8",
    timeAgo: "07:50",
    publishedBy: "publicado por vos",
    audienceLabel: "Para: toda la sala",
    content: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
    likesCount: 8,
    commentsCount: 0,
  },
];
