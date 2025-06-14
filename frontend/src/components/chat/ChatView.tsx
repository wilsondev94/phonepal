import Link from "next/link";
import { CgChevronLeft } from "react-icons/cg";
import { Textarea } from "../ui/Textarea";
import { cn } from "@/lib/utils";

export default function ChatView() {
  return (
    <section className="h-screen md:flex md:items-center">
      <div className="md:hidden sticky h-fit z-[200] shadow-sm border-b top-0 flex items-center gap-x-48 bg-brand-white-1 backdrop-blur-3xl w-full p-4 md:px-12">
        <Link href="/dashboard">
          <CgChevronLeft className="size-8" />
        </Link>
        <h1 className="text-2xl font-semibold justify-self-center">Phonepal</h1>
      </div>

      <div
        className={cn(
          "w-[353px] hidden md:block h-screen sticky left-0 top-0 right-0 bg-brand-white-2 border-r py-3 no-scrollbar overflow-y-auto overflow-x-hidden"
        )}
      >
        <nav className={cn("flex flex-col justify-center gap-8")}>User</nav>
      </div>

      <div className="relative bg-brand-white-2 w-full h-full p-4 flex flex-col gap-y-4">
        <div className="w-2/3 bg-[#f5d2fa] rounded-lg p-4">
          <p className="">Welcome to Phonepal! How can I help you today?</p>
        </div>

        <div className="ml-auto w-2/3 bg-user-chat rounded-lg p-4">
          <p className="">
            I’m looking for a phone with good battery life and camera within a
            budget of $500.
          </p>
        </div>

        <div className="w-full p-2 fixed md:absolute bottom-0 right-0 left-0">
          <Textarea />
        </div>
      </div>
    </section>
  );
}
