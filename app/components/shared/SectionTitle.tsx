import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = { SectionTitle: ReactNode; className: string };

function SectionTitle(props: Props) {
  return (
    <h3 className={twMerge("font-extrabold text-[40px]", props.className)}>
      {props.SectionTitle}
    </h3>
  );
}

export default SectionTitle;
