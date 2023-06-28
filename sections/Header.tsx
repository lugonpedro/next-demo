import Image from "next/image";

import mockImage from "@/assets/mock1.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-[#535494] py-8">
      <h2 className="title text-white">Democracia Beta:</h2>
      <div className="flex flex-row items-center justify-between overflow-hidden">
        <p className="subtitle text-white">Disponivel para IOS e Android</p>
        <Image
          src={mockImage}
          alt="Logo"
          width={1000}
          height={1000}
          className="-ml-12"
        />
      </div>

      <p className="subtitle text-white mb-4">
        Nunca foi tão fácil acompanhar quem te representa
      </p>
      <div className="flex flex-col items-center gap-4 mb-4">
        <button className="button text-[#535494] bg-white hover:bg-[#535494] hover:text-white">
          Baixe o Aplicativo
        </button>
        <button className="button text-[#535494] bg-white/[.65]">
          Voluntarie-se
        </button>
      </div>
      <li className="text text-white">
        Fique de olho na atuação dos seus representantes federais
      </li>
      <li className="text text-white">Conheça seus projetos de leis</li>
      <li className="text text-white">
        Esteja sempre ligado nas votações mais importantes
      </li>
    </div>
  );
}
