import { Spacer } from "@heroui/spacer";
import FirstScreen from "@/components/home/first-screen";
import Blog from "@/components/home/blog";
import AboutMe from "@/components/home/home-about";
import HomeProject from "@/components/home/project";
export default async function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <FirstScreen />
        <Blog />
        <AboutMe />
        <HomeProject />
        <Spacer y={24} />
      </section>
    </main>
  );
}
