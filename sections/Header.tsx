import Image from "next/image";

import mockImage from "@/assets/mock1.png";
import warningImage from "@/assets/warning.png";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-[#535494] py-8">
      <div className="md:hidden overflow-hidden">
        <h2 className="text-[40px] px-6 font-bold text-white">
          Democracia Beta:
        </h2>
        <p className="subtitle text-white my-2 mb-8">
          Nunca foi tão fácil acompanhar quem te representa
        </p>
        <Image
          src={warningImage}
          alt="Warning Image"
          width={400}
          height={400}
          className="absolute rotate w-[40%] -mt-8 right-8"
        />
        <Image
          src={mockImage}
          alt="Logo"
          width={800}
          height={800}
          className="w-[80%] object-cover ml-4 z-50"
        />
        <div className="flex flex-col px-4 gap-4 my-4">
          <button className="button text-[#535494] bg-white border-2 border-white hover:bg-[#535494] hover:text-white ">
            Baixe o Aplicativo
          </button>
          <button className="button text-white bg-[#535494] border-2 border-white hover:bg-[#6e6db8]">
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
      <div className="hidden md:flex md:flex-row px-6 items-center xl:justify-center max-h-[900px]">
        <div className="xl:max-w-[1200px]">
          <h2 className="text-[40px] px-6 font-bold mb-4 text-white md:text-[48px]">
            Democracia Beta:
          </h2>
          <p className="subtitle text-white mb-4">
            Nunca foi tão fácil acompanhar quem te representa
          </p>
          <li className="text text-white">
            Fique de olho na atuação dos seus representantes federais
          </li>
          <li className="text text-white">Conheça seus projetos de leis</li>
          <li className="text text-white">
            Esteja sempre ligado nas votações mais importantes
          </li>
          <div className="flex flex-col items-start gap-4 my-4">
            <button className="button text-[#535494] bg-white border-2 border-white hover:bg-[#535494] hover:text-white ">
              Baixe o Aplicativo
            </button>
            <button className="button text-white bg-[#535494] border-2 border-white hover:bg-[#6e6db8]">
              Voluntarie-se
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src={warningImage}
            alt="Warning Image"
            width={400}
            height={400}
            className="rotate w-1/4 self-end"
          />
          <Image
            src={mockImage}
            alt="mock"
            width={400}
            height={400}
            className="-mt-20"
          />
        </div>
      </div>
    </div>
  );
}
