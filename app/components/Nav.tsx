"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
};

const Nav = (props: Props) => {
  const route = window.location.pathname;

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
    <nav
      className={twMerge(
        "flex flex-col xl:flex-row items-start justify-center xl:justify-end xl:items-center gap-4 xl:gap-12 fixed xl:relative top-0 left-0 px-6 bg-white w-full h-screen xl:h-fit -z-10 duration-200",
        props.isMenuOpen
          ? "translate-x-0"
          : "-translate-x-full xl:translate-x-0"
      )}
    >
      {navItems.map((n) => (
        <Link
          onClick={() => props.setIsMenuOpen(false)}
          href={n.url}
          key={n.title}
          className={twMerge(
            "font-bold text-base uppercase hover:text-brandGreen duration-200",
            route.toLowerCase() === n.url.toLowerCase() && "text-brandGreen"
          )}
        >
          {n.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
