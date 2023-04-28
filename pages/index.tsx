import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

import { Inter } from "next/font/google";
import Projects from "@/components/Projects";
import RandomApiData from "@/components/ApiTest";
import api from "@/api";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: EventDataTypes[] }) {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <RandomApiData data={data} />
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  const response = await api.get("/events/");
  const data = await response.data;
  if (response.status !== 200) {
    return null;
  }
  if (response.status === 200) {
    return { props: { data: data.results } };
  }
}
