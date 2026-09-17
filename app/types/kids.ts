export type KidBadgeType = "allergy" | "action";

export interface KidBadge {
  label: string;
  type: KidBadgeType;
  bgColor: string;
  textColor: string;
}

export interface LinkedParent {
  id: string;
  name: string;
  relation: string; // ej. "Mamá", "Papá"
  status: "active" | "pending";
  initial: string;
  avatarBgColor: string;
}

export interface KidAllergyInfo {
  title: string;
  details: string;
}

export interface KidGeneralInfo {
  birthDate: string;
  roomName: string;
  enrollmentDate: string;
}

export interface KidListItem {
  id: string;
  name: string;
  initial: string;
  age: number;
  parentsCountLabel: string;
  avatarBgColor: string;
  avatarTextColor: string;
  badge?: KidBadge;
  hasChevron?: boolean;
}

export interface KidProfile extends KidListItem {
  roomName: string;
  allergies?: KidAllergyInfo;
  generalInfo: KidGeneralInfo;
  linkedParents: LinkedParent[];
}
