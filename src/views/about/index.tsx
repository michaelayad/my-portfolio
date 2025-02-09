import Image from "next/image";
import ProfessionalExperiences from "./components/professionalExperiences";

export default function About() {
  return (
    <>
      <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <ProfessionalExperiences />
        {/* <ProfessionalExperiences /> */}
      </div>
    </>
  );
}
