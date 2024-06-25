"use client";
import Link from "next/link";
import NavLinks from "./navLinks";


export default function NavBar() {

  return (
    <div className="flex flex-row w-full justify-between py-5 px-3 md-px-0">
        <Link href="/">logo</Link>
        <div className="">
            <NavLinks/>
        </div>
    </div>
  );
}
