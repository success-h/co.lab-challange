import { ProjectData } from "@/projectData";
import { Badge, Button, Stack } from "@nature-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

function Projects() {
  const router = useRouter();
  return (
    <div id="projects" className="max-w-screen-2xl mb-10 mx-auto px-7">
      <p className="text-2xl font-bold text-purple-200">Recent Projects</p>
      <p className="text-sm p-4 font-mono bg-orange-400 my-10 flex items-center">
        <RiErrorWarningLine size={24} className="mr-2" />{" "}
        <span>
          Some source codes are private but could be viewed on my permission.
        </span>
      </p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {ProjectData.map((i) => (
          <div
            data-aos="fade-up"
            key={i.id}
            className="relative max-w-[400px] w-full"
          >
            <div className="absolute bg-opacity-0 hover:bg-opacity-20 top-0 right-0 left-0 bottom-0 bg-gray-900" />
            <Image
              className="w-full h-[204px] object-cover rounded-xl"
              src={i.image}
              height={204}
              width={360}
              alt="hello"
            />
            <div className="max-w-[400px] w-full">
              <Stack row className="text-purple-200 py-7">
                {i.tags.map((i) => (
                  <Badge key={i.id} className="bg-gray-700">
                    {i.name}
                  </Badge>
                ))}
              </Stack>
              <Stack className="pr-4">
                <h1 className="text-2xl text-purple-400 font-bold font-sans">
                  {i.title}
                </h1>
                <p className="text-lg text-gray-500 mt-2 font-mono">
                  {i.description}
                </p>
              </Stack>
            </div>
            <Stack row className="items-center mt-3">
              <Button
                onClick={() => router.push(i.link)}
                className="hover:bg-[#B467DB] rounded-full text-black hover:text-white bg-white"
              >
                Visit
              </Button>
              <Button
                onClick={() => router.push(i.source)}
                className="hover:bg-[#B467DB] rounded-full text-black hover:text-white bg-white"
              >
                Source
              </Button>
            </Stack>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
