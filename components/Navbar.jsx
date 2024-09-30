import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import Image from "next/image";
import LinkedIn from "@/public/linkedin.png";
import Github from "@/public/github.png";

const Navbar = () => {
  const menu_items = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div className="md:hidden lg:flex pr-4">
        <Link
          href="/"
          className="text-sm rounded-xl p-2 font-semibold bg-black flex items-center justify-center"
        >
          <span className="text-white mr-1 lg:mr-0">A</span>
          <span className="hidden lg:flex text-white mr-1">.</span>
          <span className="text-black bg-white p-2 h-8 rounded-lg flex items-center justify-center lg:hidden">
            M
          </span>
          <span className="hidden text-black bg-white p-1 h-8 rounded-lg lg:flex items-center justify-center">
            Majumder
          </span>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <MobileMenu menu_items={menu_items} />
      </div>

      {/* MEDIUM AND LARGE SCREEN MENU */}
      <div className="hidden md:flex w-full justify-between">
        <div className="flex gap-10">
          {menu_items.map((item) => (
            <NavLink link={item} key={item.title} />
          ))}
        </div>
        {/* SOCIALS */}
        <div className="flex gap-10 items-end justify-center">
          <Link
            href="https://www.linkedin.com/in/avishekmajumder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedIn} alt="Linked In" width={32} />
          </Link>
          <Link
            href="https://github.com/avishek15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Github} alt="Github" width={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
