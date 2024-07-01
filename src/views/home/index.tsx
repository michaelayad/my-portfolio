import Image from "next/image";
import ProfileSection from "./components/profileSection";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <Services/>
    </>
  );
}
