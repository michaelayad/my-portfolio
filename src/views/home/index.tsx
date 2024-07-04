import Image from "next/image";
import ProfileSection from "./components/profileSection";
import Services from "./components/services";
import Skills from "./components/skills";
import Projects from "./components/projects";
import FeedBacks from "./components/feedbacks";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <Services/>
      <Skills/>
      <Projects/>
      <FeedBacks/>
    </>
  );
}
