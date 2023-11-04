import HeadPhones from '../public/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from '../public/shared/desktop/image-category-thumbnail-speakers.png';
import Earphones from '../public/shared/desktop/image-category-thumbnail-earphones.png';

import HeroDesktop from '../public/home/desktop/image-hero.png';
import HeroMobile from '../public/home/mobile/image-hero.jpg';

import SpeakerZX9Desktop from '../public/home/desktop/image-speaker-zx9.png';
import SpeakerZX9Tablet from '../public/home/tablet/image-speaker-zx9.png';
import SpeakerZX9Mobile from '../public/home/mobile/image-speaker-zx9.png';

import SpeakerZX7Desktop from '../public/home/desktop/image-speaker-zx7.jpg';
import SpeakerZX7Tablet from '../public/home/tablet/image-speaker-zx7.jpg';
import SpeakerZX7Mobile from '../public/home/mobile/image-speaker-zx7.jpg';

import EarphoneYX1Desktop from '../public/home/desktop/image-earphones-yx1.jpg';
import EarphoneYX1Tablet from '../public/home/tablet/image-earphones-yx1.jpg';
import EarphoneYX1Mobile from '../public/home/mobile/image-earphones-yx1.jpg';

import BestGearDesktop from '../public/shared/desktop/image-best-gear.jpg';
import BestGearTablet from '../public/shared/tablet/image-best-gear.jpg';
import BestGearMobile from '../public/shared/mobile/image-best-gear.jpg';

export const menuItems = [
  { id: '1', title: 'home' },
  { id: '2', title: 'headphones' },
  { id: '3', title: 'speakers' },
  { id: '4', title: 'earphones' },
];

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
    name: 'New Product',
    name2: 'xx99 mark ii headphones',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    slug: 'xx99-mark-two-headphones',
    cta: 'See Product',
    image: {
      desktop: HeroDesktop,
      tablet: HeroDesktop,
      mobile: HeroMobile,
    },
  },
  productSectionI: {
    name: 'ZX9 speaker',
    description:
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
    slug: 'zx9-speaker',
    cta: 'See Product',
    image: {
      desktop: SpeakerZX9Desktop,
      tablet: SpeakerZX9Tablet,
      mobile: SpeakerZX9Mobile,
    },
  },
  productSectionII: {
    name: 'ZX7 speaker',
    slug: 'zx7-speaker',
    cta: 'See Product',
    image: {
      desktop: SpeakerZX7Desktop,
      tablet: SpeakerZX7Tablet,
      mobile: SpeakerZX7Mobile,
    },
  },
  productSectionIII: {
    name: 'Yx1 Earphones',
    slug: 'yx1-earphones',
    cta: 'See Product',
    image: {
      desktop: EarphoneYX1Desktop,
      tablet: EarphoneYX1Tablet,
      mobile: EarphoneYX1Mobile,
    },
  },
};

export const audioGearData = {
  name: 'Bringing you the',
  name2: 'Best',
  name3: 'Audio gear',
  slug: '',
  description:
    'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.',
  categoryImage: {
    desktop: BestGearDesktop,
    tablet: BestGearTablet,
    mobile: BestGearMobile,
  },
};

export const footerData = {
  body: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.",
  copyright: `Copyright 2021. All Rights Reserved`,
  smPlatforms: [
    {
      id: '1',
      name: 'twitter',
      url: 'www.twitter.com',
    },
    {
      id: '2',
      name: 'facebook',
      url: 'www.facebook.com',
    },
    {
      id: '3',
      name: 'instagram',
      url: 'www.instagram.com',
    },
  ],
};
