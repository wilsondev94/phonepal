"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
  children: React.ReactNode;
}

export default function Modal({
  className,
  isOpen,
  setIsOpen,
  children,
}: ModalProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        if (setIsOpen) setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return ReactDOM.createPortal(
    <div
      ref={sidebarRef}
      className={cn(
        "fixed top-0 left-0 inset-0 z-[100] overflow-y-auto no-scrollbar transform transition-all duration-500 ease-in-out",
        className
      )}
    >
      {children}
    </div>,

    document.body
  );
}
