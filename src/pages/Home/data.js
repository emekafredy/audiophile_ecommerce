import HeadPhones from '../../public/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from '../../public/shared/desktop/image-category-thumbnail-speakers.png';
import Earphones from '../../public/shared/desktop/image-category-thumbnail-earphones.png';

import HeroDesktop from '../../public/home/desktop/image-hero.png';
import HeroMobile from '../../public/home/mobile/image-hero.jpg';

import SpeakerZX9Desktop from '../../public/home/desktop/image-speaker-zx9.png';
import SpeakerZX9Tablet from '../../public/home/tablet/image-speaker-zx9.png';
import SpeakerZX9Mobile from '../../public/home/mobile/image-speaker-zx9.png';

import SpeakerZX7Desktop from '../../public/home/desktop/image-speaker-zx7.jpg';
import SpeakerZX7Tablet from '../../public/home/tablet/image-speaker-zx7.jpg';
import SpeakerZX7Mobile from '../../public/home/mobile/image-speaker-zx7.jpg';

import EarphoneYX1Desktop from '../../public/home/desktop/image-earphones-yx1.jpg';
import EarphoneYX1Tablet from '../../public/home/tablet/image-earphones-yx1.jpg';
import EarphoneYX1Mobile from '../../public/home/mobile/image-earphones-yx1.jpg';

import BestGearDesktop from '../../public/shared/desktop/image-best-gear.jpg';
import BestGearTablet from '../../public/shared/tablet/image-best-gear.jpg';
import BestGearMobile from '../../public/shared/mobile/image-best-gear.jpg';

export const categoriesData = [
  {
    id: '1',
    name: 'headphones',
    image: HeadPhones,
    alt: 'headphones',
  },
  {
    id: '2',
    name: 'speakers',
    image: Speakers,
    alt: 'speakers',
  },
  {
    id: '3',
    name: 'earphones',
    image: Earphones,
    alt: 'earphones',
  },
];

export const landingPageData = {
  hero: {
    title1: 'New Product',
    title2: 'xx99 mark ii headphones',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    cta: {
      title: 'See Product',
      link: 'xx99-markii-headphones',
    },
    image: {
      desktop: HeroDesktop,
      tablet: HeroDesktop,
      mobile: HeroMobile,
      alt: 'heaphone-xx99-mark-ii',
    },
  },
  productSectionI: {
    title: 'ZX9 speaker',
    description:
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
    cta: {
      title: 'See Product',
      link: 'zx9-speaker',
    },
    image: {
      desktop: SpeakerZX9Desktop,
      tablet: SpeakerZX9Tablet,
      mobile: SpeakerZX9Mobile,
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
      desktop: SpeakerZX7Desktop,
      tablet: SpeakerZX7Tablet,
      mobile: SpeakerZX7Mobile,
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
      desktop: EarphoneYX1Desktop,
      tablet: EarphoneYX1Tablet,
      mobile: EarphoneYX1Mobile,
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
    desktop: BestGearDesktop,
    tablet: BestGearTablet,
    mobile: BestGearMobile,
    alt: 'best-gear',
  },
};
