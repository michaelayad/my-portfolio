/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import SocialMediaComponent from "./socialMediaComponent";

export default function ProfileSection() {
  return (
    <div className=" grid  grid-cols-5 gap-10 py-10 px-5 md:px-0">
      <div
        className={` col-span-5 md:col-span-3 py-7 order-2 md:order-1 flex flex-col justify-between`}
      >
        <h1 className={`font-kodeMono text-5xl font-extrabold text-primary`}>
          Front-End Developer
        </h1>

        <div>
          {" "}
          <h1 className={` text-2xl font-bold `}>Hi, I&apos;m Michael</h1>{" "}
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
        </div>

        <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 content-center text-center" >
          {" "}
          <button className="bg-primary text-white text-2xl w-auto max-w-max mx-auto md:mx-0 px-10 py-2 rounded-md hover:bg-hover shadow-lg shadow-primary-bg drop-shadow-lg">
            Hire me
          </button>
          <div className="h-full flex flex-row gap-x-3 items-center justify-center">
            <SocialMediaComponent />
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 px-10 order-1 md:order-2 group">
        <div className="relative max-w-80 h-96 mx-auto group">
          <div className=" max-w-80 h-[80%] bg-primary absolute inset-x-0 bottom-0 group-hover:bg-hover"></div>
          {/* <div className=" max-w-80 h-[80%] bg-transparent  border-4  border-current  absolute -inset-x-10 bottom-[-2.5rem]"></div> */}
          <div className=" max-w-80 h-[80%] bg-transparent  border-4 border-secondary absolute -inset-x-6 bottom-[-1.5rem] group-hover:-inset-x-10 group-hover:bottom-[-2.5rem] group-hover:rotate-2"></div>
          <img
            src="./images/avatar.png"
            className="h-fit absolute inset-x-0 bottom-0 "
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
}
