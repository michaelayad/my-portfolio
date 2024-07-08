/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import {
  KeyframeOptions,
  animate,
  motion,
  useInView,
  useIsomorphicLayoutEffect,
  useScroll,
  useTransform,
} from "framer-motion";
const projectsList = [
  {
    title: "Project - 1",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/project-1.jpg",
    topics: ["ReactJs", "Nodejs", "MongoDB"],
  },
  {
    title: "Project - 2",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/project-1.jpg",
    topics: ["ReactJs", "Nodejs", "MongoDB"],
  },
  {
    title: "Project - 3",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/project-2.jpg",
    topics: ["ReactJs", "Nodejs", "MongoDB"],
  },
  {
    title: "Project - 4",
    discription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/project-1.jpg",
    topics: ["ReactJs", "Nodejs", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <div className="w-full px-5 py-10 ">
      <div className="md:container mx-auto ">
        <motion.h1
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ margin: "-200px 0px -100px" }}
          className={`font-kodeMono text-lg font-bold text-primary`}
        >
          Projects
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ margin: "-200px 0px -100px" }}
          className={` text-4xl font-bold `}
        >
          My Creative Works , Latest{" "}
          <motion.span
            initial={{ rotate: "45deg", opacity: 0 }}
            whileInView={{ rotate: "0deg", opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ margin: "-200px 0px -100px" }}
            className="text-primary font-kodeMono"
          >
            Projects
          </motion.span>{" "}
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          {projectsList.map((item, index) => (
            <div key={index} className="relative w-full h-96 group rounded-lg">
              <motion.img
                src={item.image}
                alt={item.title}
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "100%" }}
                viewport={{ margin: "-200px 0px -100px" }}
                className="w-full h-full object-cover group-hover:blur-md rounded-lg transition-all duration-500 ease-in-out"
              />
              <div className="w-full h-0   absolute bottom-0 left-0 bg-primary-bg2 group-hover:h-[90%]  transition-all duration-500 ease-in-out overflow-hidden rounded-lg">
                {" "}
                <div className="h-full p-3 flex flex-col gap-y-5">
                  <h1 className="text-2xl font-bold text-center">
                    {item.title}
                  </h1>
                  <div className="text-md font-medium  text-neutral-300 max-h-[50%] overflow-hidden ">
                    {item.discription}{" "}
                  </div>
                  <div className="h-[1px] bg-primary-darkest shadow-lg"></div>
                  <div className="grow flex flex-col content-end ">
                    <h3 className="text-lg font-semibold ">Topics</h3>
                    <div className="flex flex-row gap-2 flex-wrap ">
                      {item.topics.map((topic, ind) => (
                        <div
                          className="bg-primary-darkest text-white rounded-lg px-2"
                          key={ind}
                        >
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
