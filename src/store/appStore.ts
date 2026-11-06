import { create } from 'zustand';

export type CartItem = { id: number; title: string; price: number; image: string };
type AppState = {
  authenticated: boolean;
  darkMode: boolean;
  points: number;
  rsvps: number[];
  cart: CartItem[];
  signIn: () => void;
  toggleDarkMode: () => void;
  toggleRsvp: (id: number) => void;
  addToCart: (item: CartItem) => void;
};

export const useAppStore = create<AppState>((set) => ({
  authenticated: false,
  darkMode: false,
  points: 320,
  rsvps: [],
  cart: [],
  signIn: () => set({ authenticated: true }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleRsvp: (id) => set((state) => ({ rsvps: state.rsvps.includes(id) ? state.rsvps.filter((item) => item !== id) : [...state.rsvps, id], points: state.points + (state.rsvps.includes(id) ? 0 : 20) })),
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
}));
