'use client';
import { Socials } from "@/app/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Nikhil Sen
          </span>
        </Link>

        <div className="w-[500px] h-full sm:justify-end flex flex-row  items-center  justify-between md:mr-20 ">
          <div className="flex items-center  justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer text-sm md:text-base" >
              About me
            </Link>
            <Link href="/skills" className="cursor-pointer text-sm md:text-base">
              Skills
            </Link>
            <Link href="#/rojects" className="cursor-pointer text-sm md:text-base">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5 cursor-pointer ">
          {Socials.map((social) => (
            <a href={social.hype} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Navbar;