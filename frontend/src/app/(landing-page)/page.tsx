import PhoneAnimation from "@/components/Animation";
import Navbar from "@/components/Navbar";
import CustomContainer from "@/components/ui/CustomContainer";
import { CustomOverlay } from "@/components/ui/CustomOverlay";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <CustomContainer className="relative">
      <CustomOverlay />
      <Navbar />

      <div className="absolute bg-gradient-radial from-brand-secondary via-brand-secondary/50 to-transparent w-full h-full" />

      <section className="relative py-24 sm:py-32">
        <CustomContainer className="text-center">
          <div className="mx-auto flex flex-col items-center gap-10">
            <h1 className="w-full text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-pretty font-semibold -tracking-tight text-zinc-500">
              Real-Time <br />
              <span className="bg-gradient-to-r to-brand-color-shade-1 from-brand-primary text-transparent bg-clip-text">
                Smartphone Purchase
              </span>
              <br />
              <span> Made Easy</span>
            </h1>

            <PhoneAnimation />

            <div className="flex flex-col items-center gap-8 w-full mt-12 lg:pt-16">
              <p className="text-black/80 font-medium text-xl md:text-xl lg:text-3xl">
                Order your favorite smartphone in minutes, <br /> via a live
                chat with an admin.
              </p>

              <div className="w-full xl:pt-16 md:pt-12">
                <div className="relative w-full mx-auto sm:max-w-[600px] max-sm:max-w-[400px] lg:max-w-[800px] xl:max-w-[1000px] lg:gap-y-8 flex flex-col items-start">
                  <div className="absolute border-2 border-brand-white-2 shadow-md shadow-brand-white-2 w-full h-full -z-50 rounded-lg" />

                  <div className="w-full flex flex-col items-start p-6 md:p-8 max-sm:py-8 xl:p-12 space-y-6 xl:space-y-10 text-base/5  lg:text-2xl">
                    <h3 className="font-semibold text-black/70 z-10 md:text-[1rem] lg:text-2xl max-sm:px-6">
                      How it works
                    </h3>

                    <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:space-y-6">
                      <div className="flex flex-col gap-4 max-sm:flex-row">
                        <span className="text-brand-primary font-semibold">
                          1
                        </span>
                        <p className="text-black/75">
                          Tell us what <br className="max-sm:hidden" />{" "}
                          you&apos;re looking for
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 max-sm:flex-row ">
                        <span className="text-brand-primary font-semibold">
                          2
                        </span>
                        <p className="text-black/75">
                          Get personalized <br className="max-sm:hidden" />{" "}
                          recommendations
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 max-sm:flex-row ">
                        <span className="text-brand-primary font-semibold">
                          3
                        </span>
                        <p className="text-black/75">
                          Order and receive <br className="max-sm:hidden" />{" "}
                          your perfect phone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 lg:py-8">
              <Link
                href="#"
                className="group relative flex items-center justify-center gap-2 lg:gap-x-4 transform overflow-hidden whitespace-nowrap border border-white
                
                bg-brand-primary px-16 py-4 lg:px-24 lg:py-8 rounded-xl text-brand-white-2 lg:text-3xl hover:bg-[#b83bce] hover:text-brand-white-2 transition-all duration-300
                hover:ring-1 lg:hover:ring-2
                hover:ring-brand-primary hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2

                shadow-lg hover:shadow-xl
                "
              >
                <span>Get Started</span>{" "}
                <BsArrowRight className="size-5 lg:size-10 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
                <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] lg:h-[200px] w-8 lg:w-10 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
              </Link>
            </div>
          </div>
        </CustomContainer>
      </section>

      <section
        className="relative py-10 sm:py-18 bg-gradient-to-b from-brand-secondary/5 to-brand-secondary"
        // overflow-hidden whitespace-nowrap"
      >
        {/* absolute top-0 left-0 h-full animate-scrollX */}

        <div className="flex items-center justify-between gap-4 opacity-70 px-8">
          <Image
            src="/images/iphone-logo1.svg"
            width={40}
            height={40}
            alt="iPhone Logo"
            className="grayscale max-md:w-6 md:w-8"
          />

          <Image
            src="/images/samsung-logo1.svg"
            width={90}
            height={90}
            alt="Samsung Logo"
            className="w- grayscale max-md:w-14 md:w-20"
          />

          <Image
            src="/images/infinix-logo1.svg"
            width={80}
            height={80}
            alt="Infinix Logo"
            className="w- grayscale max-md:w-14 md:w-20"
          />

          <Image
            src="/images/techno-logo1.svg"
            width={80}
            height={80}
            alt="Techno Logo"
            className="grayscale max-md:w-14 md:w-20"
          />

          <Image
            src="/images/xiaomi-logo1.svg"
            width={45}
            height={45}
            alt="Xiaomi Logo"
            className="grayscale max-md:w-6 md:w-8"
          />
        </div>
      </section>

      <section className="relative bg-brand-black-2">
        <div className="w-full flex items-start gap-6 py-16 px-8">
          {" "}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="size-12 p-0"
          />
          <div className="flex items-start max-sm:flex-col max-sm:gap-12 sm:gap-x-20 text-sm text-brand-white-3">
            <div className="flex items-start justify-between max-lg:flex-col gap-y-12">
              <div className="lg:w-[45%] flex flex-col items-start gap-4">
                <h3 className="font-semibold text-brand-white-2 sm:text-base">
                  ABOUT
                </h3>
                <p className="max-sm:text-xs">
                  At PhonePal, we believe getting the perfect smartphone should
                  be as simple as chatting with a friend. Founded in 2025,
                  we&apos;ve re-imagined the phone shopping experience by
                  eliminating complicated catalogs and overwhelming options.
                  Instead, we connect you directly with knowledgeable mobile
                  device experts who guide you to the perfect phone based on
                  your unique needs and preferences.
                </p>
              </div>

              <div className="lg:w-[45%] flex flex-col items-start gap-2">
                <h3 className="font-semibold text-brand-white-2 sm:text-base">
                  WHAT WE DO
                </h3>

                <div className="max-sm:text-xs space-y-4 w-full">
                  <p>
                    PhonePal offers a personalized smartphone shopping
                    experience through our innovative chat-based ordering
                    system:
                  </p>
                  <ul className="space-y-2 list-disc ml-3">
                    <li>
                      Personal Consultation: Chat directly with our mobile
                      experts who understand the latest devices across all
                      brands and price points Tailored
                    </li>
                    <li>
                      Recommendations: Receive suggestions based on your
                      specific needs, budget, and preferences
                    </li>
                    <li>
                      Hassle-Free Ordering: Complete your entire purchase
                      through our secure chat interface Fast Delivery: Get your
                      new phone delivered right to your doorstep
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 ">
              <h3 className="font-semibold text-brand-white-2 sm:text-base">
                CONTACT
              </h3>
              <div className="flex flex-col items-start gap-4">
                <div className="max-sm:text-xs space-y-0.5">
                  <div className="flex items-center gap-2">
                    <BsTelephone className="size-3" />
                    <span>+234 810 056 9321</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineEmail className="size-3" />
                    <span>support@phonepal.com </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLocationOutline className="size-3.5" />
                    <span>123 Mobile Street, Tech City.</span>
                  </div>
                </div>
                <span className="flex items-center gap-2">
                  {" "}
                  <Link
                    href="#"
                    className="hover:bg-neutral-700 p-1.5 rounded-full transition-all duration-300"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://x.com/wils_ohio"
                    className="hover:bg-neutral-700 p-1.5 rounded-full transition-all duration-300"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    href="#"
                    className="hover:bg-neutral-700 p-1.5 rounded-full transition-all duration-300"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/wilson-ohioleayo-13282b233"
                    className="hover:bg-neutral-700 p-1.5 rounded-full transition-all duration-300"
                  >
                    <FaLinkedin />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-brand-black-1 border-t-[1px] border-brand-grey-3 py-4 sm:py-6 flex items-center justify-between gap-4 text-[10px] sm:text-sm md:text-base text-brand-white-3 px-10 lg:px-[10rem]">
          <span>© 2025 Phonepal. All rights reserved.</span>

          <div className="flex items-center gap-x-8">
            <span>Private Policy </span>
            <span>Terms of service </span>
          </div>
        </div>
      </section>
    </CustomContainer>
  );
}
