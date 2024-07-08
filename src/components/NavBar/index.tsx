"use client";
import Link from "next/link";
import NavLinks from "./navLinks";
import { useEffect, useState } from "react";
import clsx from "clsx";
import NavLogo from "./logo";
import SwitchMode from "./switchMode";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false); // State for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Update sticky state based on scroll
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => window.removeEventListener("scroll", handleScroll); // Remove listener on unmount
  }, []);
  return (
    <>
      <div
        className={clsx(
          " w-full z-50 sticky top-0  transition duration-700 ease-in-out ",
          {
            "bg-primary dark:bg-primary-darkest shadow-sm shadow-primary dark:shadow-primary-darkest":
              isSticky,
          }
        )}
      >
        <div className="md:container mx-auto flex flex-row justify-between py-5  px-3 md-px-0">
          <NavLogo isSticky={isSticky} />
          <div className="flex flex-row md:flex-row-reverse gap-x-2 ">
            <SwitchMode />

            <NavLinks isSticky={isSticky} />
          </div>
        </div>
      </div>
    </>
  );
}
