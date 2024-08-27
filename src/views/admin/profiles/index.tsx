import Image from "next/image";
import { Suspense } from "react";
import ProfileCard from "./components/profileCard";

export default async function Profiles() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <h1 className="font-bold text text-4xl pb-2 border-b border-primary">
          Profiles
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* <BookCardsSkeleton/> */}
          <ProfileCard
            profile={{
              name: "michael ayad",
              title: "frontend developer",
              bio: "Front-End Architect with a Problem-Solving Approach | I design beautiful interfaces (React, Next.js) and build strong back-ends (Node.js, MongoDB) for complex projects (ERP, CRM), applying critical thinking for optimal solutions",
              experience_years:1,
              
            }}
          />
        </div>
      </main>
    </>
  );
}
