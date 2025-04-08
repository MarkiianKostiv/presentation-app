import Tesseract from "tesseract.js";
import { create } from "zustand";

interface ITextStore {
  image: string | null;
  setImage: (image: string) => void;
  recognizedText: string | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setRecognizedText: () => Promise<void>;
}

export const textRecognizeStore = create<ITextStore>((set, get) => ({
  image: null,
  setImage: (image: string) => set({ image }),
  recognizedText: null,
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),

  setRecognizedText: async () => {
    const image = get().image;

    if (!image) {
      return;
    }

    try {
      set({ loading: true });

      const result = await Tesseract.recognize(image, "eng+ukr");

      set({ recognizedText: result.data.text });
    } catch (error) {
      console.error("Error recognizing text:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
