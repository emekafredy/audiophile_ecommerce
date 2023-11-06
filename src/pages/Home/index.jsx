import {
  Hero,
  ProductSectionI,
  ProductSectionII,
  ProductSectionIII,
} from '../../components/LandingPage';
import { Categories, AudioGear } from '../../components/Common';
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
      <Hero data={landingPageData.hero} screenSize={screenSize} />
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
        classExtension="pt-24 pb-32"
      />
    </>
  );
}

export default Home;
