"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function SwitchMode() {
  const [isDark, setDark] = useState(
    typeof window !== 'undefined' && window.localStorage&&localStorage.getItem("mode") === "dark" ? true : false
  );
  const togglemMode = () => {
    localStorage.setItem("mode", isDark ? "" : "dark");
    setDark(!isDark);
  };

  useEffect(() => {
    
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);
  return (
    <>
      <button
        className="w-16 h-8 rounded-full bg-white flex items-center transition ease-in-out duration-300 focus:outline-none shadow mx-7"
        onClick={togglemMode}
      >
        <div
          className={clsx(
            "w-12 h-10 relative rounded-full transition ease-in-out duration-500 transform p-1 text-white",
            { "bg-gray-700 translate-x-8": isDark },
            { "bg-secondary -translate-x-4": !isDark }
          )}
        >
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </div>
      </button>
    </>
  );
}
