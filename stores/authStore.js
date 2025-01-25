import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      authToken: null,
      setAuthToken: (token) => set({ authToken: token }),
      logout: () => set({ authToken: null }),
    }),
    {
      name: "auth-storage", // Storage key
    }
  )
);
