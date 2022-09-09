import { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { NavBar } from "./nav_bar";
import { options_menu } from "../../options.config";
import { useUser } from "../../contexts/userContext";

export function Menu() {
  const { user } = useUser();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <NavBar onClick={onOpen} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            className="flex flex-row items-center justify-center gap-7"
          >
            <Image
              src={user.img}
              alt="Imagen de usuario"
              width="60px"
              height="60px"
              objectFit="cover"
              className="rounded-full"
            />
            {user.name}
          </DrawerHeader>
          <DrawerBody>
            <ul>
              {options_menu.map((option) => {
                return (
                  <li
                    className="min-w-max"
                    key={`option_nav_bar_${option.title}`}
                    onClick={onClose}
                  >
                    <Link href={option.direccion}>
                      <a
                        aria-label="dashboard"
                        className="relative flex items-center px-4 py-3 space-x-4 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white duration-200"
                      >
                        {option.svg}
                        <span className="-mr-1 font-medium">
                          {option.title}
                        </span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
