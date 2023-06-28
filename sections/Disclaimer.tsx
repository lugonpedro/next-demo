import React from "react";

type Props = { className: string; children: React.ReactNode };

export default function Disclaimer({ className, children }: Props) {
  return (
    <div
      className={
        "xl:w-[50vw] xl:flex xl:flex-col xl:justify-center" + " " + className
      }
    >
      <div className="xl:max-w-[600px]">{children}</div>
    </div>
  );
}
