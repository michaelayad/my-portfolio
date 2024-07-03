"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import NavLogo from "./logo";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    name: "About",
    href: "/about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
      </svg>
    ),
  },
  {
    name: "Blog",
    href: "/blog",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
];

export default function NavLinks({ isSticky }: { isSticky: boolean }) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter()
 
  const goTo=(link:string)=>{
    setShowMenu(false)
    router.push(link, { scroll: false })

  }
  return (
    <>
      <div className="hidden  md:flex flex-row gap-x-3">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex gap-2 px-3 text-md font-medium items-center hover:text-primary group",
                {
                  "text-primary": pathname === link.href,
                },
                {
                  "text-white hover:text-secondary":
                    isSticky && pathname !== link.href,
                },
                {
                  "text-secondary hover:text-secondary":
                    isSticky && pathname === link.href,
                }
              )}
            >
              {/* {LinkIcon} */}
              <div className="flex flex-col gap-0">
                <p className={clsx(" md:block  ")}>{link.name}</p>
                <span
                  className={clsx(
                    {
                      "w-0": pathname !== link.href,
                    },
                    " md:block  h-[2px] bg-primary transition-* duration-300 group-hover:w-full group-hover:ease-linear",
                    {
                      "w-full": pathname === link.href,
                    },
                    {
                      "bg-secondary hover:bg-secondary": isSticky,
                    }
                  )}
                ></span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={clsx("size-10 ",{"text-secondary":isSticky})} 
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      {
        <div
          className={clsx(
            "fixed top-0 right-0 h-0 w-0 bg-primary dark:bg-primary-darkest transition-all duration-500 ease-in-out",
            {
              "h-screen w-screen": showMenu,
            }
          )}
        >
          <div className="flex flex-row justify-between py-5  px-3 md-px-0">
            <div
              className={clsx(
                "opacity-0 transition-all delay-500 ease-in-out ",
                {
                  "opacity-100": showMenu,
                }
              )}
            >
              {" "}
              <NavLogo isSticky={true} />
            </div>
            <button
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10 text-secondary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className={clsx(
              "h-[calc(100%-80px)] max-h-screen flex flex-col w-100  opacity-0 gap-10 transition-all duration-500 ease-in-out",
              {
                "opacity-100": showMenu,
              }
            )}
          >
            {links.map((item, index) => (
              <button
                onClick={()=>{goTo(item.href )}}
                key={index}
                className={clsx(
                  "text-center text-secondary text-2xl font-bold py-3 shadow-lg"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      }
    </>
  );
}
