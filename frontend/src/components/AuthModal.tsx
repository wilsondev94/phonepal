"use client";

import { useModalStore } from "@/hooks/useModalStore";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { Button } from "./ui/button";
import { DottedSeparator } from "./ui/DottedSeparator";
import { Input } from "./ui/Input";
import { IoClose } from "react-icons/io5";

export const enum AuthType {
  LOG_IN = "login",
  SIGN_UP = "sign-up",
}

export default function AuthModal({
  authType,
  setAuthType,
}: {
  authType: string;
  setAuthType: (type: string) => void;
}) {
  const { openAuthModal, setOpenAuthModal } = useModalStore();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal
      isOpen={openAuthModal}
      setIsOpen={setOpenAuthModal}
      className={cn(
        "bg-white z-[700] sm:w-[487px] sm:h-fit sm:rounded-lg p-7 m-auto",
        openAuthModal
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none transition-none"
      )}
    >
      {/* <>
        {authType === "login" ? (
          <div className="w-full h-full border-none shadow-none ">
            <div
              className="group w-fit ml-auto
        "
            >
              <button
                onClick={() => setOpenAuthModal(false)}
                className="w-full h-full "
              >
                <XIcon className="group-hover:bg-gray-300 group-hover:rounded-full size-8 p-1 transition-all ease-in duration-300" />
              </button>
            </div>

            <h1 className="text-2xl font-semibold flex items-center justify-center text-center pb-7">
              Welcome back
            </h1>

            <DottedSeparator />

            <div className="py-7">
              <form className="space-y-4">
                <Input id="email" type="email" placeholder="Email" />

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 top-1 text-sm font-semibold"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-brand-primary hover:bg-brand-primary/80"
                >
                  Login
                </Button>
              </form>
            </div>
            <div className="py-7">
              <DottedSeparator />
            </div>
            <div className="py-7 flex flex-col gap-y-4 ">
              <Button
                variant="secondary"
                size="lg"
                className="w-full border"
                // disabled={isPending}
                // onClick={() => signUpWithGoogle()}
              >
                <FcGoogle className="mr-2 size-5" />
                Login with Google
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full border"
                // disabled={isPending}
                // onClick={() => signUpWithGithub()}
              >
                <FaGithub className="mr-2 size-5" />
                Login with Github
              </Button>
            </div>

            <DottedSeparator />

            <div className="py-7 flex items-center justify-center">
              <p>Don&apos;t have an account?</p>
              <button
                onClick={() => {
                  setAuthType("sign-up");
                }}
              >
                <span className="text-blue-700">&nbsp;Sign Up</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-full border-none shadow-none ">
            <div
              className="group w-fit ml-auto
        "
            >
              <button
                onClick={() => setOpenAuthModal(false)}
                className="w-full h-full "
              >
                <XIcon className="group-hover:bg-gray-300 group-hover:rounded-full size-8 p-1 transition-all ease-in duration-300" />
              </button>
            </div>

            <h1 className="text-2xl font-semibold flex items-center justify-center text-center pb-7">
              Join Us Today
            </h1>

            <DottedSeparator />

            <div className="py-7">
              <form className="space-y-4">
                <Input id="name" type="text" placeholder="Fullname" />
                <Input id="email" type="email" placeholder="Email" />

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 top-1 text-sm font-semibold"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-brand-primary hover:bg-brand-primary/80"
                >
                  Sign Up
                </Button>
              </form>
            </div>
            <div className="py-7">
              <DottedSeparator />
            </div>
            <div className="py-7 flex items-center justify-between w-full">
              <Button
                variant="secondary"
                size="lg"
                className="w-[47%] border"
                // disabled={isPending}
                // onClick={() => signUpWithGoogle()}
              >
                <FcGoogle className="mr-2 size-5" />
                Sign Up with Google
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-[47%] border"
                // disabled={isPending}
                // onClick={() => signUpWithGithub()}
              >
                <FaGithub className="mr-2 size-5" />
                Sign Up with Github
              </Button>
            </div>

            <DottedSeparator />

            <div className="py-7 flex items-center justify-center">
              <p>Already have an account?</p>
              <button onClick={() => setAuthType("login")}>
                <span className="text-blue-700">&nbsp;Login</span>
              </button>
            </div>
          </div>
        )}
      </> */}

      {openAuthModal && (
        <ModalAuth
          isOpen={openAuthModal}
          setIsOpen={setOpenAuthModal}
          authType={authType}
          setAuthType={setAuthType}
        />
      )}
    </Modal>
  );
}

const ModalAuth = ({
  isOpen,
  setIsOpen,
  authType,
  setAuthType,
}: {
  authType: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setAuthType: (type: string) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const switchMode = () => {
    authType === AuthType.LOG_IN
      ? setAuthType(AuthType.SIGN_UP)
      : setAuthType(AuthType.LOG_IN);
  };

  return (
    <div
      key={authType}
      className={"transition-all duration-300 transform animate-fade-in-scale"}
    >
      {authType === AuthType.LOG_IN ? (
        <div className="w-full h-full border-none shadow-none">
          <div
            className="group w-fit ml-auto
        "
          >
            <button onClick={() => setIsOpen(false)} className="w-full h-full ">
              <IoClose className="group-hover:bg-gray-300 group-hover:rounded-full size-8 p-1 transition-all ease-in duration-300" />
            </button>
          </div>

          <h1 className="text-2xl font-semibold flex items-center justify-center text-center pb-7">
            Welcome back
          </h1>

          <DottedSeparator />

          <div className="py-7">
            <form className="space-y-4">
              <Input id="email" type="email" placeholder="Email" />

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute bottom-0 right-0 top-1 text-sm font-semibold"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <Button
                size="lg"
                className="w-full bg-brand-primary hover:bg-brand-primary/80"
              >
                Login
              </Button>
            </form>
          </div>
          <div className="py-7">
            <DottedSeparator />
          </div>
          <div className="py-7 flex flex-col gap-y-4 ">
            <Button
              variant="secondary"
              size="lg"
              className="w-full border"
              // disabled={isPending}
              // onClick={() => signUpWithGoogle()}
            >
              <FcGoogle className="mr-2 size-5" />
              Login with Google
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full border"
              // disabled={isPending}
              // onClick={() => signUpWithGithub()}
            >
              <FaGithub className="mr-2 size-5" />
              Login with Github
            </Button>
          </div>

          <DottedSeparator />

          <div className="py-7 flex items-center justify-center">
            <p>Don&apos;t have an account?</p>
            <button onClick={switchMode}>
              <span className="text-blue-700">&nbsp;Sign Up</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full border-none shadow-none ">
          <div
            className="group w-fit ml-auto
        "
          >
            <button onClick={() => setIsOpen(false)} className="w-full h-full ">
              <IoClose className="group-hover:bg-gray-300 group-hover:rounded-full size-8 p-1 transition-all ease-in duration-300" />
            </button>
          </div>

          <h1 className="text-2xl font-semibold flex items-center justify-center text-center pb-7">
            Join us
          </h1>

          <DottedSeparator />

          <div className="py-7">
            <form className="space-y-4">
              <Input id="name" type="text" placeholder="Fullname" />
              <Input id="email" type="email" placeholder="Email" />

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute bottom-0 right-0 top-1 text-sm font-semibold"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <Button
                size="lg"
                className="w-full bg-brand-primary hover:bg-brand-primary/80"
              >
                Create Account
              </Button>
            </form>
          </div>
          <div className="py-7">
            <DottedSeparator />
          </div>
          <div className="py-7 flex items-center justify-between w-full">
            <Button
              variant="secondary"
              size="lg"
              className="w-[47%] border"
              // disabled={isPending}
              // onClick={() => signUpWithGoogle()}
            >
              <FcGoogle className="mr-2 size-5" />
              Sign Up with Google
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-[47%] border"
              // disabled={isPending}
              // onClick={() => signUpWithGithub()}
            >
              <FaGithub className="mr-2 size-5" />
              Sign Up with Github
            </Button>
          </div>

          <DottedSeparator />

          <div className="py-7 flex items-center justify-center">
            <p>Already have an account?</p>
            <button
              onClick={() => {
                switchMode();
              }}
            >
              <span className="text-blue-700">&nbsp;Login</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
