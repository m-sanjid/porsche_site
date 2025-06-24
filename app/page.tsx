import MaskEffect from "@/components/MaskEffect";
import Porsche from "@/components/Porsche";
import Navbar from "@/components/Navbar";
import HorizontalScrollSection from "@/components/HorizontalScroll";
import ContactFAB from "@/components/FAB";

export const metadata = {
  title: "GT3 Porsche Showcase",
  description:
    "Explore the legendary Porsche GT3RS | Interactive showcase with animations and design details.",
  openGraph: {
    title: "GT3 Porsche Showcase",
    description:
      "Explore the legendary Porsche GT3RS | Interactive showcase with animations and design details.",
    url: "https://gt3.sanjid.shop",
    siteName: "GT3 Porsche",
    images: [
      {
        url: "https://gt3.sanjid.shop/og-cover.png",
        width: 1200,
        height: 630,
        alt: "GT3 Porsche Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GT3 Porsche Showcase",
    description:
      "Explore the legendary Porsche GT3RS | Interactive showcase with animations and design details.",
    images: ["https://gt3.sanjid.shop/og-cover.png"],
  },
};

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
