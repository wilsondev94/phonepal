"use client";

import { useModalStore } from "@/hooks/useModalStore";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const SIDEBAR_LINKS = [
  {
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    route: "/products",
    label: "Products",
  },
  {
    route: "/orders",
    label: "Orders",
  },
  {
    route: "/chats-history",
    label: "Chats history",
  },
  {
    route: "/settings",
    label: "Settings",
  },
];

export const enum SidebarType {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}
interface SidebarProps {
  type: SidebarType;
  className?: string;
}

export default function Sidebar({ type, className }: SidebarProps) {
  const pathname = usePathname();

  const { openMobileSidebar, setOpenMobileSidebar } = useModalStore();

  return (
    <section
      className={cn(
        "h-screen sticky left-0 top-0 right-0 bg-brand-secondary py-3 no-scrollbar overflow-y-auto overflow-x-hidden",
        type === SidebarType.MOBILE ? "w-[500px]" : "w-64",
        className
      )}
    >
      <nav
        className={cn(
          "flex flex-col justify-center gap-8",
          type === SidebarType.MOBILE ? "items-start gap-2" : "items-center"
        )}
      >
        <div
          className={cn(
            "w-full flex border-b border-brand-grey-2 pb-2 px-4",
            type === SidebarType.MOBILE && "justify-between items-center mb-8"
          )}
        >
          <Link
            href="/"
            onClick={() => {
              type === SidebarType.MOBILE &&
                setOpenMobileSidebar(!openMobileSidebar);
            }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="size-20"
            />
          </Link>
          {type === SidebarType.MOBILE && (
            <button
              className="w-fit h-fit hover:bg-black/5 transition-all duration-300 rounded-full"
              onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
            >
              <IoIosClose
                aria-label="close navbar icon"
                className="size-12 hover:text-black/80 transition-colors duration-300"
              />
            </button>
          )}
        </div>

        {SIDEBAR_LINKS.map((item) => {
          //  const Icon = item.icon;
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "w-full md:w-[80%] transition-colors duration-500 ease-in-out md:rounded-lg py-4 md:px-4 px-6",
                isActive ? "bg-[#F1C0F8]" : "hover:bg-[#f7beff]",

                type === SidebarType.MOBILE && "py-2"
              )}
              onClick={() => setOpenMobileSidebar(false)}
            >
              <p className={"text-2xl font-semibold"}>{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
