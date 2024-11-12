import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Api from "@/components/Api"

// const DynamicCarousel = dynamic(() => import('@/components/Carousel'), { ssr: false });
export default function Home() {
  return (
    <>


      <Header />
      <Api />
      <Footer />

    </>
  );
}