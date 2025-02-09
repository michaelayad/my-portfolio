"use client";

import { ProfessionalExperienceType } from "@/types/professionalExperienceType";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const formatDate = (date: Date | "Present"): string => {
  if (date === "Present") return "Present";
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export default function ExperienceTimelineItem({ exp, index }: { exp: ProfessionalExperienceType, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-start relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="absolute left-0 top-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8">
        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-bg2 transition-colors duration-300">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 pr-8 text-right">
        <h3 className="text-xl font-bold text-black dark:text-white">{exp.title}</h3>
        <p className="text-gray-700 dark:text-gray-400">{exp.company}</p>
        <p className="text-sm text-gray-500">
          {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
        </p>
      </div>
      <div className="pl-16 md:w-1/2 md:pl-8">
        <div className="md:hidden mb-2">
          <h3 className="text-xl font-bold text-black dark:text-white">{exp.title}</h3>
          <p className="text-gray-700 dark:text-gray-400">{exp.company}</p>
          <p className="text-sm text-gray-500">
            {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
          </p>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
      </div>
    </motion.div>
  );
}