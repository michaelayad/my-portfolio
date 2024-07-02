/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

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
    <div className="w-full px-5 py-10">
      <div className="md:container mx-auto ">
        <h1 className={`font-kodeMono text-lg font-bold text-primary`}>
          Projects
        </h1>
        <h1 className={` text-4xl font-bold `}>
          My Creative Works , Latest{" "}
          <span className="text-primary">Projects</span>{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          {projectsList.map((item, index) => (
            <div key={index} className="relative w-full h-96 group rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:blur-md rounded-lg transition-all duration-500 ease-in-out"
              />
              <div className="w-full h-0  absolute bottom-0 left-0 bg-primary-bg2 group-hover:h-[90%]  transition-all duration-500 ease-in-out overflow-hidden rounded-lg">
                {" "}
                <div className="p-3">
                  <h1 className="text-2xl font-bold text-center py-2">
                    {item.title}
                  </h1>
                  <div className="text-md font-medium  text-neutral-300 max-h-[60%] overflow-hidden py-2">
                    {item.discription}{" "}
                  </div>
                  <div className="h-[1px] bg-primary-darkest shadow-lg"></div>
                  <h3 className="text-lg font-semibold ">Topics</h3>
                  <div className="flex flex-row gap-2 flex-wrap">
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
          ))}
        </div>
      </div>
    </div>
  );
}
