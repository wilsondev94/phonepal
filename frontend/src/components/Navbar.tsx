"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import CustomContainer from "./ui/CustomContainer";
import { useModalStore } from "@/hooks/useModalStore";
import AuthModal, { AuthType } from "./AuthModal";
import { cn } from "@/lib/utils";
import { BsArrowRight } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const { openAuthModal, setOpenAuthModal } = useModalStore();
  const [openDropdownModal, setOpenDropdownModal] = useState(false);
  const [authType, setAuthType] = useState("");

  const authUser = true;

  return (
    <>
      <AuthModal authType={authType} setAuthType={setAuthType} />

      <nav className="max-w-screen-2xl mx-auto fixed z-[100] h-20 md:h-24 max-sm:h-14 inset-x-0 top-0 border-b border-brand-white-2 bg-white backdrop-blur-lg transition-all px-4">
        <div className="flex items-center justify-between h-full my-auto text-sm font-medium">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="size-12 p-0"
            />
          </Link>

          <div className="h-full flex items-center gap-x-10 md:gap-x-12 ">
            {authUser && (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 py-2 px-4 rounded-full text-lg md:text-2xl hover:bg-brand-white-2  hover:text-black/80 transition-all duration-300 ease-in-out max-sm:hidden"
              >
                Dashboard <BsArrowRight className="size-5 md:size-6" />
              </Link>
            )}

            <div className="flex items-center gap-8 lg:gap-x-12 max-sm:hidden">
              <button
                className="border-2 border-brand-color-shade-3 rounded-full px-6 py-1 hover:border-brand-color-shade-2 text-center text-base md:text-xl lg:text-2xl text-black/80 hover:text-black/60 transition-all duration-300 ease-in-out"
                onClick={() => {
                  setAuthType(AuthType.LOG_IN);
                  setOpenAuthModal(!openAuthModal);
                }}
              >
                Login
              </button>

              <button
                className="w-full bg-brand-color-shade-3 rounded-full px-4 py-1.5 hover:bg-brand-color-shade-2 text-center text-base md:text-xl lg:text-2xl text-black/80 hover:text-black/60 transition-all duration-300 ease-in-out"
                onClick={() => {
                  setAuthType(AuthType.SIGN_UP);
                  setOpenAuthModal(!openAuthModal);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          <button
            onClick={() => setOpenDropdownModal(!openDropdownModal)}
            className="sm:hidden  rounded-full"
          >
            <BiMenu className="size-8 p-1 group-hover:bg-gray-200 group-hover:rounded-full group-hover:text-gray-600 transition-all ease-in-out duration-300" />
          </button>
        </div>
      </nav>

      {openDropdownModal && (
        <Modal
          className={cn(
            "sm:hidden bg-white border max-w-48 max-h-32 mt-12 flex flex-col gap-2 py-4 px-3 rounded-lg items-start",
            openDropdownModal && "ml-auto mr-4 mt-16"
          )}
          isOpen={openDropdownModal}
          setIsOpen={setOpenDropdownModal}
        >
          {authUser ? (
            <>
              <Link
                href="/dashboard"
                className="text-lg hover:text-black/70 transition-all duration-300 ease-in-out"
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  setAuthType(AuthType.SIGN_UP);
                  setOpenAuthModal(!openAuthModal);
                  setOpenDropdownModal(false);
                }}
                className="text-lg hover:text-black/70 transition-all duration-300 ease-in-out"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setAuthType(AuthType.SIGN_UP);
                  setOpenAuthModal(!openAuthModal);
                  setOpenDropdownModal(false);
                }}
                className="text-lg hover:text-black/70 transition-all duration-300 ease-in-out"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setAuthType("sign-up");
                  setOpenAuthModal(!openAuthModal);
                  setOpenDropdownModal(false);
                }}
                className="text-lg hover:text-black/70 transition-all duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </>
          )}
        </Modal>
      )}
    </>
  );
}
