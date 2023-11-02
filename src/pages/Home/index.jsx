import Hero from '../../components/LandingPage/Hero';
import Categories from '../../components/Common/Categories';
import ProductSectionI from '../../components/LandingPage/ProductSectionI';
import ProductSectionII from '../../components/LandingPage/ProductSectionII';
import useScreenSize from '../../hooks/useScreenSize';

import landingPageData from './data';

function Home() {
  const { screenSize } = useScreenSize();

  return (
    <>
      <Hero />
      <Categories />
      <ProductSectionI
        data={landingPageData.productSectionI}
        screenSize={screenSize}
      />
      <ProductSectionII
        data={landingPageData.productSectionII}
        screenSize={screenSize}
      />
    </>
  );
}

export default Home;
