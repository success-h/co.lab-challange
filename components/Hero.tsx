import { Button } from "@nature-ui/core";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="max-w-screen-2xl px-4 lg:px-10 mx-auto w-full mt-72">
      <div className="flex flex-col items-center">
        <p
          className={`w-full lg:px-10 flex flex-row mx-auto justify-center text-[40px] sm:text-[70px] lg:text-[90px] xl:text-[120px] text-center font-extrabold font-sans bg-clip-text text-transparent`}
        >
          <span className="animate-gradient leading-tight">
            Software Engineer Web & Mobile
          </span>
          <span className="animate-gradient3"></span>
        </p>
        <p className="text-lg text-center lg:text-start sm:text-2xl text-gray-600 font-medium font-sans mt-4 max-w-3xl mx-auto">
          A React Engineer with a{" "}
          <span className="text-purple-300 font-bold">connoisseur</span> in
          designing and developing responsive and dynamic Mobile and Web
          applications that are optimized for speed, accessibility, and user
          engagement.
        </p>

        <div className="mt-10 flex gap-x-10">
          <Link href="/#about">
            <Button className="rounded-lg border-[1px] border-white bg-purple-400  text-white  hover:text-black dark:border-white dark:text-white">
              About me
            </Button>
          </Link>
          <Link href="/#projects">
            <Button className="rounded-lg border-[1px] border-white bg-orange-300  text-white  hover:text-black dark:border-white dark:text-white">
              Past Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
