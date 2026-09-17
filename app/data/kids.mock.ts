import { KidListItem, KidProfile } from "@/app/types/kids";

export const mockKidsList: KidListItem[] = [
  {
    id: "mateo-fernandez",
    name: "Mateo Fernández",
    initial: "M",
    age: 3,
    parentsCountLabel: "2 padres vinculados",
    avatarBgColor: "#A9D9E8",
    avatarTextColor: "#1F7A93",
    badge: {
      label: "MANÍ",
      type: "allergy",
      bgColor: "#FBD8CC",
      textColor: "#D9684A",
    },
  },
  {
    id: "sofia-mendez",
    name: "Sofía Méndez",
    initial: "S",
    age: 2,
    parentsCountLabel: "1 padre vinculado",
    avatarBgColor: "#F4B8CC",
    avatarTextColor: "#C44A7A",
    hasChevron: true,
  },
  {
    id: "benjamin-ruiz",
    name: "Benjamín Ruiz",
    initial: "B",
    age: 3,
    parentsCountLabel: "2 padres vinculados",
    avatarBgColor: "#B9DEC4",
    avatarTextColor: "#3E8B62",
    hasChevron: true,
  },
  {
    id: "valentina-soto",
    name: "Valentina Soto",
    initial: "V",
    age: 2,
    parentsCountLabel: "sin padres vinculados",
    avatarBgColor: "#F4DC8E",
    avatarTextColor: "#9A7B1E",
    badge: {
      label: "VINCULAR",
      type: "action",
      bgColor: "#F9D2DE",
      textColor: "#C56486",
    },
  },
  {
    id: "tomas-diaz",
    name: "Tomás Díaz",
    initial: "T",
    age: 3,
    parentsCountLabel: "1 padre vinculado",
    avatarBgColor: "#C9B6E8",
    avatarTextColor: "#7B5FC0",
    badge: {
      label: "LACTOSA",
      type: "allergy",
      bgColor: "#FBD8CC",
      textColor: "#D9684A",
    },
  },
  {
    id: "emma-castro",
    name: "Emma Castro",
    initial: "E",
    age: 2,
    parentsCountLabel: "1 padre vinculado",
    avatarBgColor: "#F4B8CC",
    avatarTextColor: "#C44A7A",
    hasChevron: true,
  },
  {
    id: "lucas-romero",
    name: "Lucas Romero",
    initial: "L",
    age: 3,
    parentsCountLabel: "1 padre vinculado",
    avatarBgColor: "#A9D9E8",
    avatarTextColor: "#1F7A93",
    hasChevron: true,
  },
  {
    id: "olivia-vega",
    name: "Olivia Vega",
    initial: "O",
    age: 2,
    parentsCountLabel: "1 padre vinculado",
    avatarBgColor: "#B9DEC4",
    avatarTextColor: "#3E8B62",
    hasChevron: true,
  },
];

export const mockKidsProfiles: Record<string, KidProfile> = {
  "mateo-fernandez": {
    ...mockKidsList[0],
    roomName: "Sala Soles",
    allergies: {
      title: "Alergias y notas",
      details: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
    },
    generalInfo: {
      birthDate: "12 mar 2022",
      roomName: "Soles",
      enrollmentDate: "feb 2025",
    },
    linkedParents: [
      {
        id: "lucia-fernandez",
        name: "Lucía Fernández",
        relation: "Mamá · activa",
        status: "active",
        initial: "L",
        avatarBgColor: "#C9B6E8",
      },
      {
        id: "diego-fernandez",
        name: "Diego Fernández",
        relation: "Papá · invitación enviada",
        status: "pending",
        initial: "D",
        avatarBgColor: "#A9C7E8",
      },
    ],
  },
  "sofia-mendez": {
    ...mockKidsList[1],
    roomName: "Sala Soles",
    generalInfo: {
      birthDate: "18 may 2023",
      roomName: "Soles",
      enrollmentDate: "mar 2025",
    },
    linkedParents: [
      {
        id: "mariana-mendez",
        name: "Mariana Méndez",
        relation: "Mamá · activa",
        status: "active",
        initial: "M",
        avatarBgColor: "#F4B8CC",
      },
    ],
  },
  "benjamin-ruiz": {
    ...mockKidsList[2],
    roomName: "Sala Soles",
    generalInfo: {
      birthDate: "05 ene 2022",
      roomName: "Soles",
      enrollmentDate: "ene 2025",
    },
    linkedParents: [
      {
        id: "carlos-ruiz",
        name: "Carlos Ruiz",
        relation: "Papá · activo",
        status: "active",
        initial: "C",
        avatarBgColor: "#B9DEC4",
      },
      {
        id: "laura-ruiz",
        name: "Laura Ruiz",
        relation: "Mamá · activa",
        status: "active",
        initial: "L",
        avatarBgColor: "#C9B6E8",
      },
    ],
  },
  "valentina-soto": {
    ...mockKidsList[3],
    roomName: "Sala Soles",
    generalInfo: {
      birthDate: "20 ago 2023",
      roomName: "Soles",
      enrollmentDate: "abr 2025",
    },
    linkedParents: [],
  },
  "tomas-diaz": {
    ...mockKidsList[4],
    roomName: "Sala Soles",
    allergies: {
      title: "Alergias y notas",
      details: "Intolerancia a la lactosa. Ofrecer leches alternativas vegetales.",
    },
    generalInfo: {
      birthDate: "10 nov 2021",
      roomName: "Soles",
      enrollmentDate: "feb 2025",
    },
    linkedParents: [
      {
        id: "pedro-diaz",
        name: "Pedro Díaz",
        relation: "Papá · activo",
        status: "active",
        initial: "P",
        avatarBgColor: "#C9B6E8",
      },
    ],
  },
  "emma-castro": {
    ...mockKidsList[5],
    roomName: "Sala Soles",
    generalInfo: {
      birthDate: "14 sep 2023",
      roomName: "Soles",
      enrollmentDate: "mar 2025",
    },
    linkedParents: [
      {
        id: "gabriela-castro",
        name: "Gabriela Castro",
        relation: "Mamá · activa",
        status: "active",
        initial: "G",
        avatarBgColor: "#F4B8CC",
      },
    ],
  },
  "lucas-romero": {
    ...mockKidsList[6],
    roomName: "Sala Soles",
    generalInfo: {
      birthDate: "02 jun 2022",
      roomName: "Soles",
      enrollmentDate: "ene 2025",
    },
    linkedParents: [
      {
        id: "rodrigo-romero",
        name: "Rodrigo Romero",
        relation: "Papá · activo",
        status: "active",
        initial: "R",
        avatarBgColor: "#A9D9E8",
      },
    ],
  },
  "olivia-vega": {
    ...mockKidsList[7],
    roomName: "Sala Soles",
    generalInfo: {
      birthDate: "30 dic 2022",
      roomName: "Soles",
      enrollmentDate: "feb 2025",
    },
    linkedParents: [
      {
        id: "claudia-vega",
        name: "Claudia Vega",
        relation: "Mamá · activa",
        status: "active",
        initial: "C",
        avatarBgColor: "#B9DEC4",
      },
    ],
  },
};

export function getKidProfileById(id: string): KidProfile | undefined {
  return mockKidsProfiles[id];
}
