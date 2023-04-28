import { Avatar } from "@nature-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

function About() {
  const router = useRouter();

  function handleEmailClick(event: any) {
    event.preventDefault();
    window.location.href = "mailto:successhycenth8@gmail.com";
  }
  return (
    <div className="w-full mt-40  dark:bg-inherit">
      <section
        id="about"
        className="max-w-screen-2xl gap-x-7 w-full flex flex-col md:flex-row px-4 py-40 lg:px-28 mx-auto"
      >
        <div className="flex flex-1">
          <Image
            data-aos="fade-up"
            alt="my photo"
            src="/success.jpg"
            height={500}
            width={500}
            className="rounded-lg object-center md:h-[500px] h-[300px] object-cover w-full"
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-1 text-gray-400 mt-10 md:mt-0 flex-col font-mono px-4"
        >
          <h1 className="text-2xl font-mono text-purple-200">
            Hello there 👋, my name is Success Hycenth. I&apos;m a software
            developer.
          </h1>

          <p className="mt-2">
            I am a highly skilled software developer with a strong focus on
            frontend development. <br /> <br />
            With my wealth of experience working with ReactJS, Next.js,
            TailwindCSS, React Native, and TypeScript, I&apos;ve developed a
            strong foundation in building responsive and dynamic web
            applications. I have a deep understanding of ReactJS and its
            ecosystem, including Redux, React Router, and Styled Components, as
            well as extensive experience with TailwindCSS. <br /> <br />{" "}
            Additionally, I&apos;ve built worked with React Native and developed
            amazing applications for iOS and Android, leveraging the power of
            React Native to create seamless and performant mobile experiences.{" "}
            <br /> <br /> As a developer, I prioritize writing clean and
            maintainable code that is both scalable and efficient. I&apos;m
            experienced in using TypeScript to enhance code quality and prevent
            errors, ensuring a seamless development experience. In my free time,
            I enjoy contributing to the open-source community and sharing my
            knowledge with others through online tutorials. Overall, I&apos;m
            passionate about developing top-notch frontend experiences,
            including with Next.js, and I&apos;m always eager to learn and grow
            in my career.
          </p>
          <h1 className="text-2xl font-mono mt-7 text-purple-200">
            Professional History
          </h1>

          <p className="mt">
            <button className="justify-self-center mt-4 bg-purple-500 sm:justify-self-start py-2 px-7 text-white hover:text-black outline-none text-2xl font-medium hover:bg-purple-200 active:bg-purple-200 rounded-full">
              <Link
                href="SuccessHycenth.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Link>
            </button>
          </p>
          <div className="flex items-center gap-8 md:gap-16 mt-10">
            <Link
              href={"https://www.linkedin.com/in/success-hycenth-a57556204/"}
            >
              <BsLinkedin size={24} />
            </Link>
            <Link href={"https://github.com/success-h"}>
              <BsGithub size={24} />
            </Link>

            <HiOutlineMail
              className="cursor-pointer"
              size={30}
              onClick={handleEmailClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
