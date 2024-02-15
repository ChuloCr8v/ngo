import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const footerNav = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Donate",
      url: "/",
    },
    {
      title: "Who we are",
      url: "/",
    },
    {
      title: "Blog",
      url: "/",
    },
    {
      title: "Apply for a Grant",
      url: "/",
    },
    {
      title: "Contact",
      url: "/",
    },
  ];

  const contactProps = [
    {
      text: "Location: Adebowale House, Block C, 1st Floor #150, Ikorodu Road, Onipanu, Lagos.",
    },
    {
      text: "Phone: (+234) 070 1269 5490",
    },
    {
      text: "Email: info@moyinig.org",
    },
    {
      text: " CALL US NOW ON (+234) 070 1269 5490 WE ARE OPEN FROM MONDAY - FRIDAY (10:00 AM - 04:00 PM) TO HELP YOU",
    },
  ];

  return (
    <footer className="relative bg-[#030820] w-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full py-24 grid grid-cols-3 gap-12">
        <div className="flex flex-col items-start gap-6">
          <h3 className="font-bold text-3xl text-left text-white">About Us</h3>
          <p className="text-left text-gray-500 text-base">
            Mindful of Youths Initiative is a Non-Governmental organization
            poised to empower youths in every sphere of human endeavor. It
            intends to create an environment in which young persons would be
            involved and successful in their homes, family life, school, work,
            neighbourhood and the nation at large.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 text-gray-500">
          <h3 className="font-bold text-3xl text-left text-white">
            Navigation Links
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {footerNav.map((nav) => (
              <Link href={nav.url}>{nav.title}</Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 text-gray-500">
          <h3 className="font-bold text-3xl text-left text-white">
            Contact Us
          </h3>
          <div className="">
            {contactProps.map((c) => (
              <p>{c.text}</p>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/footer-bg.png"
        alt="footer"
        height={200}
        width={700}
        className="w-full absolute bottom-0 left-0"
      />
    </footer>
  );
};

export default Footer;
