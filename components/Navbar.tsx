import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Link as Scroll } from "react-scroll";

import logoIcon from "@/assets/logo.png";

export function Navbar() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="bg-white w-full">
      <div className="flex flex-row items-center justify-between px-6 py-4">
        <Image src={logoIcon} alt="Logo" width={50} height={50} />
        <div className="hidden md:flex flex-row items-center gap-6">
          <Scroll
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black text-lg"
          >
            Equipe
          </Scroll>
          <Link href="#" className="text-black text-lg">
            Estatuto
          </Link>
          <Link href="#" className="text-black text-lg">
            Termos de Uso
          </Link>
          <Link href="#" className="text-black text-lg">
            Política de Privacidade
          </Link>
        </div>
        {opened || (
          <HiMenu
            className="h-10 w-10 text-[#535494] md:hidden"
            onClick={() => setOpened(true)}
          />
        )}
        {opened && (
          <IoMdClose
            className="h-10 w-10 text-[#535494] md:hidden"
            onClick={() => setOpened(false)}
          />
        )}
      </div>
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className={`bg-white absolute py-6 flex flex-col items-center gap-4 top-18 w-full rounded-bl-lg md:hidden ${
              opened ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <Scroll
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              className="text-black text-lg cursor-pointer"
            >
              Equipe
            </Scroll>
            <Link
              href="https://www.democraciabeta.org/_files/ugd/4a34bc_dd7cbba146fa4ccf97746d52c6dd886f.pdf"
              className="text-black text-lg"
            >
              Estatuto
            </Link>
            <Link
              href="https://www.democraciabeta.org/_files/ugd/4a34bc_2cf3eac8c56a44a4b31a71f379ea3602.pdf"
              className="text-black text-lg"
            >
              Termos de Uso
            </Link>
            <Link
              href="https://www.democraciabeta.org/_files/ugd/4a34bc_ea0ccc133ddd46a791cc0d872242e533.pdf"
              className="text-black text-lg"
            >
              Política de Privacidade
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
