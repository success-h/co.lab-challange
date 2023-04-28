import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDisclosure } from "@nature-ui/core";
import DrawerComponent from "./Drawer";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="fixed z-20 left-0 top-0 flex w-full justify-between border-b font-mono border-gray-700 bg-gradient-to-b from-zinc-900 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <div className="max-w-screen-2xl px-4 lg:px-28 h-full mx-auto w-full flex items-center justify-between">
        <Image src="/logo.svg" height={50} width={50} alt="logo" />
        <ul className="lg:flex text-gray-500 gap-10 text-lg font-bold hidden">
          <li className="hover:text-purple-500">
            <Link href="/#about">About</Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href="/#projects">Projects</Link>
          </li>{" "}
          <li className="hover:text-purple-500">
            <Link href="/#api">Random API Data</Link>
          </li>
        </ul>
        <HiMenuAlt3
          onClick={onOpen}
          className="cursor-pointer lg:hidden"
          size={38}
        />
        <DrawerComponent isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
}
