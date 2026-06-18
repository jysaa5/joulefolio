import type { ISODateString } from "@/shared/lib/date/types";

export type UserRole = "prosumer" | "consumer";

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  location: string;
  role: UserRole;
  joinedAt: ISODateString;
};
