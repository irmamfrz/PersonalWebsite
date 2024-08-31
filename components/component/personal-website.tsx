/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mnecqmguS7v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-[#1E40AF] to-[#DC2626] text-white">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BriefcaseIcon className="h-6 w-6" />
          <span className="sr-only">Muhammad Refaat's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1E40AF] to-[#DC2626] text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Greetings, I'm Muhammad Refaat
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I'm a seasoned full-stack web developer with a knack for crafting robust and visually appealing
                    solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#DC2626] px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Let's Connect
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1E40AF] to-[#DC2626] text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Proven Track Record</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the impressive projects I've delivered for my clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-[#1E40AF] text-white">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A robust and scalable web application that streamlined our client's operations.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#DC2626] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-[#1E40AF] text-white">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">
                    A cutting-edge e-commerce platform that drove significant growth for our client.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#DC2626] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-[#1E40AF] text-white">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A custom-built web application that revolutionized our client's industry.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#DC2626] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a seasoned full-stack developer, I've honed my skills over the past 4 years, delivering robust and
                  visually stunning web solutions for a diverse range of clients. With a strong background in Flutter,
                  FlutterFlow, and WordPress for the front-end, and Firebase and PostgreSQL for the back-end, I'm
                  equipped to tackle any web development challenge. I'm passionate about staying on the cutting edge of
                  technology and continuously improving my craft to provide the best possible results for my clients.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                />
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#1E40AF] to-[#DC2626] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#B91C1C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Download Resume
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Talk Business</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or just want to discuss potential opportunities? Fill out the form below and
                  I'll get back to you as soon as I can.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form
                  className="flex flex-col gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const name = e.target.elements.name.value
                    const email = e.target.elements.email.value
                    const message = e.target.elements.message.value
                    window.location.href = `mailto:medom193@gmail.com?subject=New Message from ${name}&body=${message}`
                  }}
                >
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
                  <Textarea placeholder="Message" name="message" className="max-w-lg flex-1 bg-[#1E40AF] text-white" />
                  <Button type="submit" className="bg-[#DC2626] hover:bg-[#B91C1C] text-white">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
