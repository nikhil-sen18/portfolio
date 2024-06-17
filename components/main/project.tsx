'use client';
import React from "react";
import ProjectCard from "../sub/project-card";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 " >
        <Link href="https://lingo-five-xi.vercel.app/" target="_blank" className="z-50">
          <ProjectCard
            href="https://lingo-five-xi.vercel.app/"
            src="/lingo.png"
            title="Lingo"
            description="Lingo is platform for learning different languages."
          />
        </Link>
        <Link href="/" className="z-50">
          <ProjectCard
            href="/"
            src="/portfoliopic.png"
            title="My Portfolio"
            description="My personal portfolio showcasing my skills and projects."
          />
        </Link>
        <ProjectCard
          href="/"
          src="/upcoming.webp"
          title=""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
