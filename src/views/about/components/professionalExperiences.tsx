"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { ProfessionalExperienceType } from "@/types/professionalExperienceType";
import ExperienceTimelineItem from "./experienceTimelineItem";

const experiences: ProfessionalExperienceType[] = [
  {
    title: "Software Engineer",
    company: "Tech Corp Inc.",
    startDate: new Date(2020, 0),
    endDate: "Present",
    description:
      "Developed scalable web applications using modern frameworks like React and Node.js.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Solutions",
    startDate: new Date(2018, 5),
    endDate: new Date(2019, 11),
    description:
      "Designed and implemented user interfaces for client projects, ensuring responsiveness and accessibility.",
  },
  {
    title: "Intern",
    company: "Startup Hub",
    startDate: new Date(2017, 4),
    endDate: new Date(2017, 7),
    description:
      "Assisted in building prototypes and conducting user research for early-stage startups.",
  },
];

export default function ProfessionalExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 ">
        <motion.h1
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ margin: "-150px 0px -100px" }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-primary text-center"
        >
          Professional Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ margin: "-150px 0px -100px" }}
          transition={{ duration: 1 }}
          className="text-secondary-darkest dark:text-secondary-lightest text-center font-bold"
        >
          A brief overview of my professional journey.
        </motion.p>

        <div className="relative ">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="absolute h-full w-1 bg-primary left-4 md:left-1/2 transform md:-translate-x-1/2"
          ></motion.div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceTimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
