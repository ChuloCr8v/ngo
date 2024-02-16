"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-xl flex flex-col items-center jusitfy-center fixed left-0 top-0 w-full z-50 bg-white">
      <div className="bg-brandGreen w-full py-2 lg:flex items-center text-white px-4 hidden ">
        <p className="border-r-2 pr-6 ">Phone: (+234) 070 1269 5490 </p>
        <p className="px-6 border-r-2">
          Email: <span className="border-b pb-0.5"> info@moyinig.org</span>
        </p>
        <div className="socials flex items-center gap-6 px-6">
          <a href="https://www.facebook.com">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl flex justify-between items-center place-self-center w-full py-4 px-4 relative z-[9999]">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            height={65}
            width={300}
            className="h-12 w-auto -ml-2"
          />
        </Link>

        <FaBars
          className={twMerge(
            "text-xl hover:text-brandGreen duration-200 xl:hidden",
            isMenuOpen && "text-brandGreen"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
