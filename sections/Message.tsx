import Image from "next/image";

import messageImage from "@/assets/message.png";

type Props = {};

export default function Message({}: Props) {
  return (
    <div className="bg-[#C2D3E7] py-8">
      <div className="md:hidden">
        <h2 className="title text-[#535494] uppercase mb-4">
          Participe da política do seu estado
        </h2>
        <p className="text text-[#535494]">
          <span className="font-semibold">
            Com o aplicativo Democracia Beta,
          </span>{" "}
          a sua participação na política da região onde mora fica muito mais
          fácil e simples de entender.
        </p>
        <Image src={messageImage} alt="Logo" width={1000} height={1000} />
        <p className="text text-[#535494]">
          <span className="font-semibold">
            Todas as informações disponíveis no app
          </span>{" "}
          são coletadas de fontes públicas e oficiais, levando até você o que há
          de mais recente sobre{" "}
          <span className="font-semibold">
            Deputados Federais, Senadores e Presidente da República.
          </span>
        </p>
      </div>
      <div className="hidden bg-white rounded-2xl mx-12 md:block">
        <h2 className="title text-[#EE885C] uppercase underline decoration-8 decoration-[#EE885C]/50 py-4">
          Participe da política do seu estado
        </h2>
        <div className="flex flex-row">
          <div className="my-4">
            <p className="text text-[#EE885C]">
              <span className="font-semibold">
                Com o aplicativo Democracia Beta,
              </span>{" "}
              a sua participação na política da região onde mora fica muito mais
              fácil e simples de entender.
            </p>

            <p className="text text-[#EE885C]">
              <span className="font-semibold">
                Todas as informações disponíveis no app
              </span>{" "}
              são coletadas de fontes públicas e oficiais, levando até você o
              que há de mais recente sobre{" "}
              <span className="font-semibold">
                Deputados Federais, Senadores e Presidente da República.
              </span>
            </p>
          </div>

          <Image
            src={messageImage}
            alt="A girl with a phone in your hands"
            width={1000}
            height={1000}
            className="w-1/3 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
