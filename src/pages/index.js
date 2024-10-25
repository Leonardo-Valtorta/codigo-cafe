import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('@/components/Carousel'), { ssr: false });

const Home = () => {
  return (
    <div>
    </div>
  );
};

export default Home;
