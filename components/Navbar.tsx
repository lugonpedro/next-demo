import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import logoIcon from "@/assets/logo.png";

export function Navbar() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="bg-white w-full">
      <div className="flex flex-row items-center justify-between p-4">
        <Image src={logoIcon} alt="Logo" width={50} height={50} />
        <div className="hidden md:flex flex-row items-center gap-6">
          <Link href="#" className="text-black text-lg">
            Inicio
          </Link>
          <Link href="#" className="text-black text-lg">
            Quartos
          </Link>
          <Link href="#" className="text-black text-lg">
            Contato
          </Link>
          <Link href="#" className="text-black text-lg">
            Sobre
          </Link>
        </div>
        <Link href="/login" className="hidden md:block text-black text-lg">
          Login
        </Link>
        {opened || (
          <HiMenu
            className="h-10 w-10 text-black md:hidden"
            onClick={() => setOpened(true)}
          />
        )}
        {opened && (
          <IoMdClose
            className="h-10 w-10 text-black md:hidden"
            onClick={() => setOpened(false)}
          />
        )}
      </div>
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            className={`bg-white absolute py-4 flex flex-col items-center gap-4 top-18 w-screen rounded-bl-lg md:hidden ${
              opened ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <Link href="#" className="text-black text-lg">
              Inicio
            </Link>
            <Link href="#" className="text-black text-lg">
              Quartos
            </Link>
            <Link href="#" className="text-black text-lg">
              Contato
            </Link>
            <Link href="#" className="text-black text-lg">
              Sobre
            </Link>
            <Link href="/login" className="text-black text-lg">
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
