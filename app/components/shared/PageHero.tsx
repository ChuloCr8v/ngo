import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  currentPage: string;
  title: string;
  className: string;
};

const PageHero = (props: Props) => {
  return (
    <div className={twMerge(props.className, "page-hero flex relative")}>
      <h3 className="text-4xl md:text-[50px] text-center lg:text-[100px] text-white font-bold">
        {props.title}
      </h3>
      <div className=" text-white text-lg lg:text-2xl flex items-center gap-2 mt-4 lg:mt-12">
        <Link href={"/"} className="hover:text-brandYellow duration-200 ">
          Home
        </Link>
        <FaChevronRight className="text-lg" />
        <p className="">{props.currentPage}</p>
      </div>
    </div>
  );
};

export default PageHero;
