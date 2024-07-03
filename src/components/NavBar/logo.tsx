"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLogo({ isSticky }: { isSticky: boolean }) {
  
  return (
    <>
      <Link
            href="/"
            className={clsx(
              "font-kodeMono text-2xl text-primary font-black capitalize tracking-tighter skew-y-3 hover:text-hover hover:-skew-y-3 transition duration-300 ease-in-out",
              {
                "text-secondary hover:text-secondary-lighter": isSticky,
              }
            )}
          >
            MAiklelo
          </Link>
    </>
  );
}
