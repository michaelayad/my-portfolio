/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import SocialMediaComponent from "./socialMediaComponent";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProfileSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div className="md:container mx-auto grid  grid-cols-5 gap-10 py-10  md:py-20 px-5 md:px-0">
      <div
        className={` col-span-5 md:col-span-3 py-7 order-2 md:order-1 flex flex-col justify-between`}
      >
        <motion.h1
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ margin: "-150px 0px -100px" }}
          className={`font-kodeMono text-5xl font-extrabold text-primary`}
        >
          Front-End Developer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-150px 0px -100px" }}
        >
          {" "}
          <motion.h1
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: "-200px 0px 0px" }}
            className={` text-2xl font-bold `}
          >
            Hi, I&apos;m Michael
          </motion.h1>{" "}
          <h1
            className={`font-inter text-xl py-3 leading-10 text-stone-600 dark:text-stone-300`}
          >
            Front-End Architect with a Problem-Solving Approach | I design
            beautiful interfaces (React, Next.js) and build strong back-ends
            (Node.js, MongoDB) for complex projects (ERP, CRM), applying
            critical thinking for optimal solutions
          </h1>
          {/* <div className="h-5 bg-primary-lightest"></div>
          <div className="h-5 bg-primary-lighter"></div>
          <div className="h-5 bg-primary-light"></div>
          <div className="h-5 bg-primary-dark"></div>
          <div className="h-5 bg-primary-darker"></div>
          <div className="h-5 bg-primary-darkest"></div>
          <div className="h-5 bg-secondary-lightest"></div>
          <div className="h-5 bg-secondary-lighter"></div>
          <div className="h-5 bg-secondary-light"></div>
          <div className="h-5 bg-secondary-dark"></div>
          <div className="h-5 bg-secondary-darker"></div>
          <div className="h-5 bg-secondary-darkest"></div> */}
        </motion.div>

        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 content-center text-center">
          {" "}
          <motion.button
            initial={{ opacity: 0, scale: 0.9, rotate: "45deg" }}
            whileInView={{ opacity: 1, scale: 1, rotate: "0deg" }}
            viewport={{ margin: "-150px 0px -100px" }}
            className="bg-primary text-white text-2xl w-auto max-w-max mx-auto md:mx-0 px-10 py-2 rounded-md hover:bg-hover shadow-lg shadow-primary-bg drop-shadow-lg"
          >
            Hire me
          </motion.button>
          <div className="h-full flex flex-row gap-x-3 items-center justify-center">
            <SocialMediaComponent />
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 order-1 md:order-2 group px-5">
        <div className="relative max-w-80 h-96 mx-auto group">
          <motion.div
            initial={{ opacity: 0.7, translateY: -50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ margin: "-150px 0px -100px" }}
            className=" max-w-80 h-[80%] bg-primary absolute inset-x-0 bottom-0 group-hover:bg-hover rounded-lg"
          ></motion.div>
          {/* <div className=" max-w-80 h-[80%] bg-transparent  border-4  border-current  absolute -inset-x-10 bottom-[-2.5rem]"></div> */}
          <motion.div
            initial={{ opacity: 0.7, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-150px 0px -100px" }}
            className=" max-w-80 h-[80%] bg-transparent  border-4 border-secondary absolute -inset-x-6 bottom-[-1.5rem] rounded-lg group-hover:-inset-x-10 group-hover:bottom-[-2.5rem] group-hover:rotate-2 "
          ></motion.div>
          <motion.img
            src="./images/avatar.png"
            className="h-fit absolute inset-x-0 bottom-0 rounded-lg"
            alt="profile image"
            initial={{ opacity: 0.7, translateY: 50 , scale:0.7 }}
            whileInView={{ opacity: 1, translateY: 0 ,scale:1}}
            viewport={{ margin: "-150px 0px -100px" }}
          />
        </div>
      </div>
    </div>
  );
}
