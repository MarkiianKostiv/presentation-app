import { Slide } from "@/lib/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ISlidesStore {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
}

export const useSlidesStore = create(
  persist<ISlidesStore>(
    (set, get) => ({
      slides: [],
      setSlides: (slides: Slide[]) => set({ slides }),
    }),
    {
      name: "slides-storage",
    }
  )
);
