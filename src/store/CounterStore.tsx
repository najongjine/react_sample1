import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "counter-storage", // localStorage에 저장될 키 이름
    }
  )
);

export default useCounterStore;
