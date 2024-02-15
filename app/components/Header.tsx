import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Nav from "./Nav";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="shadow-xl flex flex-col fixed left-0 top-0 w-full z-50 bg-white">
      <div className="bg-brandGreen w-full py-2 flex items-center text-white px-4">
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
      <div className="max-w-7xl flex justify-between items-center place-self-center w-full py-4">
        <Image src={"/logo.png"} alt={"logo"} height={65} width={300} />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
