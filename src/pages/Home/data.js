import BestGearDesktop from '../../assets/shared/desktop/image-best-gear.jpg';
import BestGearTablet from '../../assets/shared/tablet/image-best-gear.jpg';
import BestGearMobile from '../../assets/shared/mobile/image-best-gear.jpg';

export const categoriesData = [
  {
    id: '1',
    name: 'headphones',
    image:
      './src/assets/shared/desktop/image-category-thumbnail-headphones.png',
    alt: 'headphones',
  },
  {
    id: '2',
    name: 'speakers',
    image: '/src/assets/shared/desktop/image-category-thumbnail-speakers.png',
    alt: 'speakers',
  },
  {
    id: '3',
    name: 'earphones',
    image: '/src/assets/shared/desktop/image-category-thumbnail-earphones.png',
    alt: 'earphones',
  },
];

export const landingPageData = {
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
      mobile: '/src/assets/home/mobile/image-speaker-zx9.png',
      tablet: '/src/assets/home/tablet/image-speaker-zx9.png',
      desktop: '/src/assets/home/desktop/image-speaker-zx9.png',
      alt: 'speaker-2x9',
    },
  },
  productSectionII: {
    title: 'ZX7 speaker',
    cta: {
      title: 'See Product',
      link: 'zx7-speaker',
    },
    image: {
      mobile: '/src/assets/home/mobile/image-speaker-zx7.jpg',
      tablet: '/src/assets/home/tablet/image-speaker-zx7.jpg',
      desktop: '/src/assets/home/desktop/image-speaker-zx7.jpg',
      alt: 'earphones-yx1',
    },
  },
  productSectionIII: {
    title: 'Yx1 Earphones',
    cta: {
      title: 'See Product',
      link: 'yx1-earphones',
    },
    image: {
      mobile: '/src/assets/home/mobile/image-earphones-yx1.jpg',
      tablet: '/src/assets/home/tablet/image-earphones-yx1.jpg',
      desktop: '/src/assets/home/desktop/image-earphones-yx1.jpg',
      alt: 'earphones-yx1',
    },
  },
};

export const audioGearData = {
  subTitle1: 'Bringing you the',
  subTitle2: 'Best',
  subTitle3: 'Audio gear',
  description:
    'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
  image: {
    mobile: BestGearMobile,
    tablet: BestGearTablet,
    desktop: BestGearDesktop,
    alt: 'best-gear',
  },
};
