import { motion } from "framer-motion";
import Link from "next/link";

import { AiFillMail, AiFillInstagram } from "react-icons/ai";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-screen flex flex-col items-center py-8">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row gap-8 mb-4">
          <Link
            href="https://www.linkedin.com/in/lugonpedro/"
            className="text-[#535494] text-4xl"
          >
            <AiFillMail />
          </Link>
          <a
            href="https://github.com/lugonpedro/"
            className="text-[#535494] text-4xl"
          >
            <AiFillInstagram />
          </a>
        </div>
      </motion.div>

      <p className="text">© 2023 por Democracia Beta.</p>
    </div>
  );
}
