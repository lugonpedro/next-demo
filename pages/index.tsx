import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import Header from "@/sections/Header";
import Message from "@/sections/Message";
import Team from "@/sections/Team";
import Footer from "@/components/Footer";
import Disclaimer from "@/sections/Disclaimer";

import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";

import mockImage from "@/assets/mock2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Democracia Beta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Header />
        <Message />
        <Team />
        <div className="xl:flex xl:flex-row">
          <Disclaimer className="bg-white text-center py-8 xl:w-[50vw]">
            <h3 className="subtitle text-[#EE885C] mb-4">
              O que você pode fazer com o{" "}
              <span className="underline decoration-[#EE885C]">
                Democracia Beta?
              </span>
            </h3>
            <button className="button bg-[#EE885C] text-white">
              Fale conosco
            </button>
          </Disclaimer>
          <Disclaimer className="bg-[#EE885C] text-center py-8 xl:w-[50vw]">
            <div className="flex flex-row items-center justify-center">
              <AiOutlineArrowRight className="h-12 w-12 text-white" />
              <p className="text text-white text-start max-w-[300px]">
                Descobrir o que seus representantes eleitos estão fazendo;
              </p>
            </div>
            <div className="flex flex-row items-center justify-center mt-4">
              <AiOutlineArrowRight className="h-12 w-12 text-white" />
              <p className="text text-white text-start max-w-[300px]">
                Se posicionar a favor, contra ou de forma neutra;
              </p>
            </div>
            <div className="flex flex-row items-center justify-center mt-4">
              <AiOutlineArrowRight className="h-12 w-12 text-white" />
              <p className="text text-white text-start max-w-[300px]">
                Acompanhar todos os gastos públicos dos parlamentares;
              </p>
            </div>
            <div className="flex flex-row items-center justify-center mt-4">
              <AiOutlineArrowRight className="h-12 w-12 text-white" />
              <p className="text text-white text-start max-w-[300px]">
                Saber como o seu parlamentar votou em determinada sessão;
              </p>
            </div>
            <div className="flex flex-row items-center justify-center mt-4">
              <AiOutlineArrowRight className="h-12 w-12 text-white" />
              <p className="text text-white text-start max-w-[300px]">
                Ter seus próprios rankings dos políticos e partidos que melhor
                te representam.
              </p>
            </div>
          </Disclaimer>
        </div>

        <div className="xl:flex xl:flex-row">
          <Disclaimer className="bg-[#535494] text-center py-8 xl:w-[50vw]">
            <h3 className="subtitle text-white mb-4">O nosso feed</h3>
            <p className="text text-white">
              O Democracia Beta também possui um feed que mostra gastos,
              projetos de lei e muito mais de parlamentares e do Presidente,
              proporcionando que o usuário possa se posicionar como quiser sobre
              o tema antes de saber quem é o político.
            </p>
          </Disclaimer>
          <Disclaimer className="bg-white text-center py-8 xl:w-[50vw]">
            <Image src={mockImage} alt="Mock Image" />
            <p className="text text-[#535494]">
              Com o intuito de não influenciar na sua avaliação do ato,
              mostramos apenas a silhueta do representante, lhe dando total
              autonomia para se expressar objetivamente sobre o tema.
            </p>
          </Disclaimer>
        </div>

        <div className="xl:flex xl:flex-row">
          <Disclaimer className="bg-white text-center py-8 xl:w-[50vw]">
            <h3 className="subtitle text-[#EE885C] mb-4">Como funciona?</h3>
            <Image src={mockImage} alt="Mock Image" />
          </Disclaimer>
          <Disclaimer className="bg-[#EE885C] py-8 text-start xl:w-[50vw]">
            <p className="text text-white mb-4">
              O nosso aplicativo é gratuito e está disponível tanto para
              Android, quanto para IOS. Após a instalação, o usuário precisará
              preencher um formulário com as seguintes informações:
            </p>
            <li className="text text-white">Nome de usuário;</li>
            <li className="text text-white">Número de telefone;</li>
            <li className="text text-white">Data de nascimento;</li>
            <li className="text text-white">Estado de domicílio eleitoral;</li>
            <li className="text text-white">E-mail.</li>
            <p className="text text-white mt-4">
              Também será preciso criar uma senha para a sua conta. Em seguida,
              basta fazer o seu login informando o e-mail e a sua senha.
            </p>
          </Disclaimer>
        </div>

        <Footer />
      </div>
    </>
  );
}
