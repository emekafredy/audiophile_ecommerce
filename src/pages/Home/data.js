import ProductIDesktop from '../../assets/home/desktop/image-speaker-zx9.png';
import ProductITablet from '../../assets/home/tablet/image-speaker-zx9.png';
import ProductIMobile from '../../assets/home/mobile/image-speaker-zx9.png';

const landingPageData = {
  hero: {},
  productSectionI: {
    title: 'ZX9 speaker',
    description:
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
    cta: {
      title: 'See Product',
      link: 'zx9-speaker',
    },
    image: {
      mobile: ProductIMobile,
      tablet: ProductITablet,
      desktop: ProductIDesktop,
      alt: 'speaker-2x9',
    },
  },
  productSectionII: {
    title: 'ZX7 speaker',
    cta: {
      title: 'See Product',
      link: 'zx7-speaker',
    },
  },
  productSectionIII: {},
};

export default landingPageData;
