import type { User } from "@/entities/user/model/types";
import { asISODateString } from "@/shared/lib/date/types";

export const users: User[] = [
  {
    id: "user-1",
    name: "Alice",
    avatarUrl: "https://example.com/avatars/alice.png",
    location: "Seoul",
    role: "prosumer",
    joinedAt: asISODateString("2026-01-10T00:00:00.000Z"),
  },
  {
    id: "user-2",
    name: "Minho",
    avatarUrl: "https://example.com/avatars/minho.png",
    location: "Busan",
    role: "prosumer",
    joinedAt: asISODateString("2025-11-03T00:00:00.000Z"),
  },
  {
    id: "user-3",
    name: "Jiyeon",
    avatarUrl: "https://example.com/avatars/jiyeon.png",
    location: "Incheon",
    role: "prosumer",
    joinedAt: asISODateString("2025-08-21T00:00:00.000Z"),
  },
  {
    id: "user-4",
    name: "Bob",
    avatarUrl: "https://example.com/avatars/bob.png",
    location: "Daegu",
    role: "consumer",
    joinedAt: asISODateString("2026-02-14T00:00:00.000Z"),
  },
];

export const userById = Object.fromEntries(
  users.map((user) => [user.id, user]),
) as Record<string, User>;
