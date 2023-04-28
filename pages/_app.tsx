import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}
