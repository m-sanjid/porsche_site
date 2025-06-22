import MaskEffect from "@/components/MaskEffect";
import Porsche from "@/components/Porsche";
import Navbar from "@/components/Navbar";
import HorizontalScrollSection from "@/components/HorizontalScroll";
import ContactFAB from "@/components/FAB";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <MaskEffect />
      <Porsche />
      <HorizontalScrollSection />
      <ContactFAB />
    </div>
  );
}
