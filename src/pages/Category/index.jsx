import { useParams } from 'react-router-dom';
import Hero from '../../components/LandingPage/Hero';
import useScreenSize from '../../hooks/useScreenSize';

import { landingPageData } from '../../data';

function Category() {
  const { screenSize } = useScreenSize();
  const { category } = useParams();

  return (
    <>
      <Hero data={landingPageData.hero} screenSize={screenSize} />
      <p className="text-center uppercase font-bol text-4xl bg-white-100 h-[500px]">
        {`Welcome to the ${category} Category`}
      </p>
    </>
  );
}

export default Category;
