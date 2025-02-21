import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Approach from "@/components/approach";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import RecentProjects from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
        </div>
      </main>
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black-100">
        <Footer />
      </div>
    </>
  );
}
