import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Manifeste from "@/components/Manifeste";
import Products from "@/components/Products";
import Heritage from "@/components/Heritage";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";
import StickyMobileCta from "@/components/StickyMobileCta";
import ScrollReveal from "@/components/ScrollReveal";
import { SiteProvider } from "@/components/site-context";

export default function Home() {
  return (
    <SiteProvider>
      <Header />
      <Hero />
      <div className="pattern-band" />
      <Story />
      <Manifeste />
      <div className="pattern-band" />
      <Products />
      <Heritage />
      <div className="pattern-band pattern-band-dark" />
      <Footer />
      <Modal />
      <Toast />
      <StickyMobileCta />
      <ScrollReveal />
    </SiteProvider>
  );
}
