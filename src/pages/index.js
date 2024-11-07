
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";


const DynamicCarousel = dynamic(() => import('@/components/Carousel'), { ssr: false });

const Home = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <Footer />
    </>     
  );
}