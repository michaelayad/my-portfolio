/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

export default function Services() {
  return (
    <div className="w-full bg-primary-bg pt-10 pb-20 px-5 shadow-md shadow-primary ">
      <div className="md:container mx-auto ">
        <h1 className={`font-kodeMono text-lg font-bold text-primary`}>
          Services
        </h1>
        <h1 className={` text-4xl font-bold `}>What I Do?</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 md:px-0  ">
          <div className={` col py-7 px-5 bg-white dark:bg-black shadow-lg rounded-lg group hover:shadow-2xl hover:scale-[1.04] transition duration-300 ease-in-out`}>
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
          </div>
          <div className={` col py-7 px-5 bg-white dark:bg-black shadow-xl rounded-lg group hover:shadow-2xl hover:scale-[1.04] transition duration-300 ease-in-out`}>
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
          </div>
          <div className={` col py-7 px-5 bg-white dark:bg-black shadow-xl rounded-lg group hover:shadow-2xl hover:scale-[1.04] transition duration-300 ease-in-out`}>
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
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 py-10 px-5 md:px-0  ">
            <div className="col text-center pb-5 border-b-2 border-primary-light md:border-b-0  md:border-r-2 ">
                <h1 className="text-4xl text-primary font-extrabold">1+ Y</h1>
                <h1 className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold">Experience</h1>
            </div>
            <div className="col text-center pb-5 border-b-2 border-primary-light md:border-b-0  md:border-r-2 ">
                <h1 className="text-4xl text-primary font-extrabold">5</h1>
                <h1 className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold">Projects Compoleted</h1>
            </div>
            <div className="col text-center">
                <h1 className="text-4xl text-primary font-extrabold">3</h1>
                <h1 className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold">Happy Clients</h1>
            </div>
        </div>
      </div>
    </div>
  );
}
