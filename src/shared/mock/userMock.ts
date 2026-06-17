import type { User } from "@/entities/user/model/types";

export const users: User[] = [
  {
    id: "user-1",
    name: "Alice",
  },
  {
    id: "user-2",
    name: "Minho",
  },
  {
    id: "user-3",
    name: "Jiyeon",
  },
  {
    id: "user-4",
    name: "Bob",
  },
];

export const userById = Object.fromEntries(
  users.map((user) => [user.id, user]),
) as Record<string, User>;
