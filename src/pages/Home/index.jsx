import Header from "../../components/Header";
import ExperienceSection from "../../components/ExperienceSection";
import IconsSection from "../../components/IconsSection";
import PresentationSection from "../../components/PresentationSection";
import ProjectsSection from "../../components/ProjectsSection";
import GraduationSection from "../../components/GraduationSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <PresentationSection />
      <IconsSection />
      <ProjectsSection />
      <ExperienceSection />
      <GraduationSection />
      <Footer />
    </main>
  );
}
