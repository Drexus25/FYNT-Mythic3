export type UserRole = "recruiter" | "seeker";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  company?: string;
  title?: string;
  coins?: number;
  avatar?: string;
}

export const DUMMY_USERS: User[] = [
  {
    id: "usr_recruiter_01",
    name: "Sarah Jenkins",
    email: "recruiter@fynt.id",
    password: "FyntSecure@2026",
    role: "recruiter",
    company: "Nusa Studio",
    coins: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "usr_seeker_01",
    name: "Budi Pratama",
    email: "seeker@fynt.id",
    password: "FyntSecure@2026",
    role: "seeker",
    title: "Product Designer",
    coins: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

const AUTH_STORAGE_KEY = "fynt_auth_user";

export function authenticateUser(email: string, password: string): User | null {
  const normalizedEmail = email.trim().toLowerCase();
  const foundUser = DUMMY_USERS.find(
    (u) => u.email.toLowerCase() === normalizedEmail && u.password === password
  );
  return foundUser || null;
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event("fynt_auth_change"));
  } catch {
    // ignore
  }
}

export function logoutUser(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event("fynt_auth_change"));
  } catch {
    // ignore
  }
}
