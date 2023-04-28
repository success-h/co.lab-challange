import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@nature-ui/core";
import Link from "next/link";

export default function DrawerComponent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      placement="right"
      className="z-50"
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent
        style={{
          backgroundColor: "black",
        }}
        className="pt-10"
      >
        <DrawerCloseButton className="mr-4 mt-11 p-4" />
        <DrawerBody>
          <ul className="gap-10 pt-20 text-lg font-md">
            <li className="hover:text-purple-500 ">
              <Link onClick={onClose} href="/#about">
                About
              </Link>
            </li>
            <li className="hover:text-purple-500">
              <Link onClick={onClose} href="/#projects">
                Projects
              </Link>
            </li>
            <li className="hover:text-purple-500">
              <Link onClick={onClose} href="/#api">
                Random API Data
              </Link>
            </li>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
