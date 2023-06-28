import Image from "next/image";
import React from "react";

type Props = {
  image: any;
  name: string;
  position: string;
};

export function PeopleCard({ image, name, position }: Props) {
  return (
    <div>
      <Image
        src={image}
        alt="People Photo"
        width={500}
        height={500}
        className="rounded-full"
      />
      <p className="text-[22px] mt-2 font-semibold text-[#535494] text-center">
        {name}
      </p>
      <p className="text-[16px] text-black text-center">{position}</p>
    </div>
  );
}
