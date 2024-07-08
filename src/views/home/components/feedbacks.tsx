/* eslint-disable @next/next/no-img-element */
"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const feedBacksList = [
  {
    name: "Client 1",
    position: "Position on client 1",
    feedBack:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/avatar.png",
  },
  {
    name: "Client 2",
    position: "Position on client2",
    feedBack:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/avatar.png",
  },
  {
    name: "Client 3",
    position: "Position on client3",
    feedBack:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/avatar.png",
  },
  {
    name: "Client 4",
    position: "Position on client4",
    feedBack:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a perspiciatis blanditiis quis ex quae. Quo odio reiciendis ea blanditiis nam fugiat iusto ducimus, itaque laboriosam magni. Blanditiis, consectetur ex!    ",
    image: "./images/avatar.png",
  },
];

export default function FeedBacks() {
  const [activeFeedBack, setActiveFeedBack] = useState(0);

  return (
    <div className="w-full  py-10 ">
      <div className="md:container mx-auto px-5 pb-10">
        <h1 className={`font-kodeMono text-lg font-bold text-primary`}>
          FeedBacks
        </h1>
        <h1 className={` text-4xl font-bold `}>What Clients Say ?</h1>
      </div>
      <div className="w-full h-fit bg-feedback bg-cover bg-center shadow-lg py-10">
        <div className="md:container mx-auto px-5">
          <div className="max-w-[700px] mx-auto flex flex-row gap-x-3  ">
            <button
              className="peer w-10 self-center text-primary hover:bg-primary-lightest hover:text-secondary-darkest dark:hover:bg-primary-darkest dark:hover:text-secondary-lightest rounded-full disabled:opacity-0"
              onClick={() => {
                setActiveFeedBack(activeFeedBack - 1);
              }}
              disabled={activeFeedBack === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {feedBacksList.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "visible grow relative py-5 min-h-96 sm:min-h-80 ",
                  { "hidden ": index !== activeFeedBack },
                  { "visible animate-specially": index === activeFeedBack }
                )}
              >
                <div className="w-full h-full shadow-md bg-white dark:bg-black shadow-primary rounded-md"></div>
                <div className="absolute top-0 left-5 h-full w-[calc(100%-40px)] bg-white dark:bg-black shadow-xl drop-shadow-lg shadow-primary rounded-md text-center hover:scale-[1.005] transition-all duration-300 ease-in-out">
                  <div className="w-20 h-20 rounded-full mx-auto border-2 border-primary bg-white dark:bg-black relative -top-10">
                    <img
                      src={item.image}
                      className="h-full w-full object-cover rounded-full"
                      alt={item.name}
                    />
                  </div>
                  <div className=" flex flex-col gap-3 -mt-6">
                    <h1 className="flex-none  text-2xl font-bold text-primary">
                      {item.name}
                    </h1>
                    <h1 className="flex-none  text-lg font-semibold text-secondary-darkest dark:text-secondary-lighter">
                      {item.position}
                    </h1>
                    <div className="max-h-48 sm:max-h-36 text-md font-semibold text-neutral-600 dark:text-neutral-300 overflow-y-clip px-2">
                      {item.feedBack}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="peer w-10 self-center text-primary hover:bg-primary-lightest hover:text-secondary-darkest dark:hover:bg-primary-darkest dark:hover:text-secondary-lightest rounded-full disabled:opacity-0"
              onClick={() => {
                setActiveFeedBack(activeFeedBack + 1);
              }}
              disabled={activeFeedBack === feedBacksList.length - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10 rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
