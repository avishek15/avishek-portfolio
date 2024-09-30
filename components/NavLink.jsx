"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.url}
      className={`rounded-xl p-1 font-semibold text-xl ${
        pathName === link.url && "bg-black text-white p-2 font-bold"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
