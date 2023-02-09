import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} /> <Footer />
    </>
  );
}
