import Hero from '../../components/LandingPage/Hero';
import Categories from '../../components/Common/Categories';
import ProductSectionI from '../../components/LandingPage/ProductSectionI';
import ProductSectionII from '../../components/LandingPage/ProductSectionII';
import ProductSectionIII from '../../components/LandingPage/ProductSectionIII';
import AudioGear from '../../components/Common/AudioGear';
import useScreenSize from '../../hooks/useScreenSize';

import {
  landingPageData,
  categoriesData,
  audioGearData,
} from '../../data';

function Home() {
  const { screenSize } = useScreenSize();

  return (
    <>
      <Hero
        data={landingPageData.hero}
        screenSize={screenSize}
      />
      <Categories data={categoriesData} />
      <ProductSectionI
        data={landingPageData.productSectionI}
        screenSize={screenSize}
      />
      <ProductSectionII
        data={landingPageData.productSectionII}
        screenSize={screenSize}
      />
      <ProductSectionIII
        data={landingPageData.productSectionIII}
        screenSize={screenSize}
      />
      <AudioGear
        data={audioGearData}
        screenSize={screenSize}
        extraClasses="pt-24 pb-32"
      />
    </>
  );
}

export default Home;
