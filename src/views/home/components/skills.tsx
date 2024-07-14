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
const skillsList = [
  {
    title: "HTML",
    icon: "./images/skills/html.png",
  },
  {
    title: "CSS",
    icon: "./images/skills/css-3.png",
  },
  {
    title: "Bootstrap",
    icon: "./images/skills/bootstrap.png",
  },
  {
    title: "Tailwind",
    icon: "./images/skills/tailwind.png",
  },
  {
    title: "Javascript",
    icon: "./images/skills/js.png",
  },
  {
    title: "Reactjs",
    icon: "./images/skills/reactjs.png",
  },
  {
    title: "Next.js",
    icon: "./images/skills/next.png",
  },
  {
    title: "Nodejs",
    icon: "./images/skills/nodejs.png",
  },
  {
    title: "MongoDB",
    icon: "./images/skills/mongodb2.png",
  },
];

export default function Skills() {
  return (
    <div className="w-full px-5">
      <div className="md:container mx-auto md:px-20">
        <div className="relative -top-16 bg-white-bg dark:bg-black p-5  shadow-2xl rounded-2xl">
          <motion.h1
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ margin: "-150px 0px -100px" }}
            className={`font-kodeMono text-lg font-bold text-primary`}
          >
            Skills
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ margin: "-150px 0px -100px" }}
            className={` text-4xl font-bold `}
          >
            What I&apos;m Best At ?
          </motion.h1>
          <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-10">
            {skillsList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale:0.7, translateY: -20 ,skew:"30deg"}}
                whileInView={{scale:1,  translateY: 0 ,skew:"0deg"}}
                viewport={{ margin: "-150px 0px -100px" }}
                className="relative bg-primary-bg  px-5 py-5 flex flex-col items-center group rounded-2xl  hover:border-2 hover:border-primary hover:shadow-lg"
              >
                <img
                  src={item.icon}
                  className="max-h-14 max-w-12  opacity-100 transition duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full "
                  alt={item.title}
                />
                <h1 className="absolute top-auto left-auto opacity-0 px-3 text-xl text-primary font-bold translate-y-5 group-hover:opacity-100 transition duration-500 ease-linear group-hover:translate-y-0">
                  {item.title}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
