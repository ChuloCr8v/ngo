import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  btnLink?: Url;
  title: string;
};

const Button = (props: Props) => {
  return (
    <>
      {props.btnLink ? (
        <Link
          href={props.btnLink}
          className={twMerge(
            props.className,
            " h-[70px] flex items-center justify-center px-8 uppercase font-semibold text-xl hover:scale-[0.9] duration-200 text-white"
          )}
        >
          {props.title}
        </Link>
      ) : (
        <button
          className={twMerge(
            props.className,
            "h-[100px] hover:scale-[0.9] duration-200 text-white"
          )}
        >
          {props.title}
        </button>
      )}
    </>
  );
};

export default Button;
