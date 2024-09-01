"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Component() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    window.location.href = `mailto:medom193@gmail.com?subject=New Message from ${name}&body=${message}`;
  };

  return (
    <div
      className="flex flex-col min-h-[100vh]"
      style={{ backgroundColor: "#000C19" }}
    >
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-[#1E40AF] to-[#DC2626] text-white">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#hero"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1E40AF] to-[#DC2626] text-white"
        >
          <div className="container px-4 md:px-6 flex justify-center items-center h-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-center">
              Hi
            </h1>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{ backgroundColor: "#1E475C", color: "white" }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Portolfio
                </h2>
                {/* <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the impressive projects I've delivered for
                  my clients.
                </p> */}
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <ProjectCard
                title="Project 1"
                description="Elearning Application for online Accessible Education."
                imageUrl="/assets/ELearningApp/homepage.png"
                projectUrl="https://www.linkedin.com/in/mohamedr-refaat/"
              />
              <ProjectCard
                title="Project 2"
                description="Lottery Prize App."
                imageUrl="/assets/LotteryPrizeApp/homepage.png"
                projectUrl="https://www.linkedin.com/in/mohamedr-refaat/"
              />
              <ProjectCard
                title="Project 3"
                description="Ticket Requesting System."
                imageUrl="/assets/TicketSystem/homepage.png"
                projectUrl="https://www.linkedin.com/in/mohamedr-refaat/"
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{ backgroundColor: "#000C19", color: "white" }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  About Me
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a seasoned full-stack developer, I've honed my skills over
                  the past 4 years, delivering robust and visually stunning web
                  solutions for a diverse range of clients. With a strong
                  background in Flutter, FlutterFlow, and WordPress for the
                  front-end, and Firebase and PostgreSQL for the back-end, I'm
                  equipped to tackle any web development challenge. I'm
                  passionate about staying on the cutting edge of technology and
                  continuously improving my craft to provide the best possible
                  results for my clients.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {/* <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                /> */}
                <Link
                  href="https://www.linkedin.com/in/mohamedr-refaat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#1E40AF] to-[#DC2626] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1E40AF] to-[#DC2626] text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let's Talk
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or just want to discuss potential
                  opportunities? Fill out the form below and I'll get back to
                  you as soon as I can.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="max-w-lg flex-1 bg-[#1E40AF] text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="max-w-lg flex-1 bg-[#1E40AF] text-white"
                  />
                  <Textarea
                    placeholder="Message"
                    name="message"
                    className="max-w-lg flex-1 bg-[#1E40AF] text-white"
                  />
                  <Button
                    type="submit"
                    className="bg-[#DC2626] hover:bg-[#B91C1C] text-white"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => (
  <Card className="bg-[#1E40AF] text-white">
    <Image
      src={imageUrl}
      width={550}
      height={310}
      alt={title}
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
    />
    <CardContent className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Link
        href={projectUrl}
        className="inline-flex h-9 items-center justify-center rounded-md bg-[#DC2626] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        prefetch={false}
      >
        View Project
      </Link>
    </CardContent>
  </Card>
);
