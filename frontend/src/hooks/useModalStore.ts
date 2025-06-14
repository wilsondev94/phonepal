import { create } from "zustand";

interface ModalStoreProps {
  openAuthModal: boolean;
  setOpenAuthModal: (isOpen: boolean) => void;
  openMobileSidebar: boolean;
  setOpenMobileSidebar: (isOpen: boolean) => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  openAuthModal: false,
  setOpenAuthModal: (isOpen) => set({ openAuthModal: isOpen }),

  openMobileSidebar: false,
  setOpenMobileSidebar: (isOpen) => set({ openMobileSidebar: isOpen }),
}));
