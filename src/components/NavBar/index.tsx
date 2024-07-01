"use client";
import Link from "next/link";
import NavLinks from "./navLinks";


export default function NavBar() {

  return (
    <div className="md:container mx-auto flex flex-row w-full justify-between py-5 px-3 md-px-0">
        <Link href="/" className="font-kodeMono text-2xl text-primary font-black capitalize tracking-tighter skew-y-3 hover:text-hover hover:-skew-y-3">MAiklelo</Link>
        <div className="">
            <NavLinks/>
        </div>
    </div>
  );
}
