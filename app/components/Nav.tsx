import Link from "next/link";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Team",
      url: "/team",
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "Events",
      url: "/events",
    },

    {
      title: "Events",
      url: "/events",
    },
    {
      title: "Support MOYI",
      url: "/support",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
  ];
  return (
    <nav className="flex items-center gap-12">
      {navItems.map((n) => (
        <Link
          href={n.url}
          key={n.title}
          className="font-bold text-base uppercase hover:text-brandGreen duration-200"
        >
          {n.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
