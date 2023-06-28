import React from "react";

type Props = { className: string; children: React.ReactNode };

export default function Disclaimer({ className, children }: Props) {
  return <div className={"" + " " + className}>{children}</div>;
}
