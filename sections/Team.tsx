import { PeopleCard } from "@/components/Card";

import gabriel from "@/assets/people/reis.png";
import laura from "@/assets/people/laura.png";
import ed from "@/assets/people/ed.png";
import marcelo from "@/assets/people/marcelo.png";
import vivi from "@/assets/people/vivi.png";
import arthur from "@/assets/people/arthur.png";
import pablito from "@/assets/people/pablito.png";
import gads from "@/assets/people/gads.png";
import luis from "@/assets/people/luis.png";

type Props = {};

export default function Team({}: Props) {
  return (
    <div className="bg-[#FEF2E5] py-8" id="team">
      <div className="flex flex-col items-center justify-center">
        <h2 className="title text-[#918FFD] uppercase mb-4 overline text-center">
          Conheça o <span className="text-[#535494]">time</span>
        </h2>
        <div className="flex flex-col items-center gap-8 md:grid md:px-24 md:grid-cols-2 xl:grid-cols-3">
          <PeopleCard
            image={gabriel}
            name="Gabriel Reis"
            position="Presidente e Gerente de Produto"
          />
          <PeopleCard
            image={laura}
            name="Laura Teixeira"
            position="Vice-presidente e Desenvolvedora Back-end"
          />
          <PeopleCard
            image={ed}
            name="Eduardo Côrtes"
            position="Diretor de Tecnologia"
          />
          <PeopleCard
            image={marcelo}
            name="Marcelo Fleury"
            position="Desenvolvedor Back-end"
          />
          <PeopleCard
            image={vivi}
            name="Viviane Letícia"
            position="UX/UI Designer"
          />
          <PeopleCard
            image={arthur}
            name="Arthur Lima"
            position="Desenvolvedor Front-end"
          />
          <PeopleCard
            image={pablito}
            name="Pablo Henrique"
            position="Desenvolvedor Full stack"
          />
          <PeopleCard
            image={gads}
            name="Bárbara Gadioli"
            position="Social Media e Designer"
          />
          <PeopleCard
            image={luis}
            name="Luis Honorato"
            position="Desenvolvedor Front-end"
          />
        </div>
      </div>
    </div>
  );
}
