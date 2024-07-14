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
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 1,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

export default function Services() {
  return (
    <div className="w-full bg-primary-bg pt-10 pb-20 px-5 shadow-md shadow-primary ">
      <div className="md:container mx-auto ">
        <motion.h1
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ margin: "-150px 0px -100px" }}
          className={`font-kodeMono text-lg font-bold text-primary`}
        >
          Services
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-150px 0px -100px" }}
          className={` text-4xl font-bold `}
        >
          What I Do?
        </motion.h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 md:px-0  ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-200px 0px -5px" }}
            className={` col py-7 px-5 bg-white-bg dark:bg-black shadow-lg rounded-lg group hover:shadow-2xl hover:scale-[1.04] hover:bg-hover-white-bg hover:dark:bg-[#090909] transition duration-300 ease-in-out`}
          >
            <img
              src="./images/ux-design.png"
              className="max-h-20 "
              alt="ux image"
            />
            <p className="text-xl font-bold text-primary-darker dark:text-primary py-3 group-hover:text-primary dark:group-hover:text-primary-lighter">
              User Interface & User Experience Design
            </p>
            <p className="text-md font-semibold text-neutral-600 dark:text-neutral-300">
              I help bring your vision to life by crafting intuitive and
              visually appealing user interfaces (UI) and user experiences (UX).
              I prioritize user-friendliness and design layouts that guide
              visitors seamlessly through your website or application.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-200px 0px -5px" }}
            className={` col py-7 px-5 bg-white-bg dark:bg-black shadow-xl rounded-lg group hover:shadow-2xl hover:scale-[1.04] hover:bg-hover-white-bg hover:dark:bg-[#090909] transition duration-300 ease-in-out`}
          >
            <img
              src="./images/responsive-website.png"
              className="max-h-20 "
              alt="ux image"
            />
            <p className="text-xl font-bold text-primary-darker dark:text-primary py-3 group-hover:text-primary dark:group-hover:text-primary-lighter">
              Responsive & Interactive Websites
            </p>
            <p className="text-md font-semibold text-neutral-600 dark:text-neutral-300">
              I build dynamic and engaging websites that adapt beautifully to
              any screen size, ensuring a flawless user experience across
              desktops, tablets, and mobile devices - Accessibility best
              practices to ensure your website is usable by everyone,
              Integration of APIs from different platforms for added
              functionality
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-200px 0px -5px" }}
            className={` col py-7 px-5 bg-white-bg dark:bg-black shadow-xl rounded-lg group hover:shadow-2xl hover:scale-[1.04] hover:bg-hover-white-bg hover:dark:bg-[#090909] transition duration-300 ease-in-out`}
          >
            <img
              src="./images/backend.png"
              className="max-h-20 "
              alt="ux image"
            />
            <p className="text-xl font-bold text-primary-darker dark:text-primary py-3 group-hover:text-primary dark:group-hover:text-primary-lighter">
              Robust and Scalable Server-Side Solutions
            </p>
            <p className="text-md font-semibold text-neutral-600 dark:text-neutral-300">
              I build the powerful engine behind your website or application
              using modern technologies like Node. js. I ensure your back-end
              can handle complex data processing, user authentication, and API
              integrations seamlessly.
            </p>
          </motion.div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 py-10 px-5 md:px-0  ">
          <div className="col text-center pb-5 border-b-2 border-primary-light md:border-b-0  md:border-r-2 ">
            <h1 className="text-4xl text-primary font-extrabold">
              <AnimatedCounter from={0} to={1} />+ Y
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-150px 0px -100px" }}
              className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold"
            >
              Experience
            </motion.h1>
          </div>
          <div className="col text-center pb-5 border-b-2 border-primary-light md:border-b-0  md:border-r-2 ">
            <h1 className="text-4xl text-primary font-extrabold">
              <AnimatedCounter from={0} to={5} />
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-150px 0px -100px" }}
              className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold"
            >
              Projects Compoleted
            </motion.h1>
          </div>
          <div className="col text-center">
            <h1 className="text-4xl text-primary font-extrabold">
              <AnimatedCounter from={0} to={3} />
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-150px 0px -100px" }}
              className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold"
            >
              Happy Clients
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}
