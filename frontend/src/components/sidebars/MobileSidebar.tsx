"use client";

import { useModalStore } from "@/hooks/useModalStore";
import Modal from "../Modal";
import Sidebar, { SidebarType } from "./Sidebar";
import { cn } from "@/lib/utils";

export default function MobileSidebar() {
  const { openMobileSidebar, setOpenMobileSidebar } = useModalStore();

  // if (!openMobileSidebar) return null;

  return (
    <Modal
      isOpen={openMobileSidebar}
      setIsOpen={setOpenMobileSidebar}
      className={cn(
        "w-full z-[300]",
        openMobileSidebar ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <Sidebar type={SidebarType.MOBILE} className="md:hidden h-full w-full" />
    </Modal>
  );
}
