// import Button from '../Button';
// import HeroImage from '../../assets/home/desktop/image-hero.jpg';

function Hero() {
  return (
    <div className="bg-black-100">
      <div className="h-[800px] grid grid-cols-1 gap-4 sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto">
        {/* <div className="py-40">
          <p className="text-white-100 opacity-50 leading-19
            tracking-xl font-regular text-sm uppercase mb-6">
            New product
          </p>
          <p className="text-white-100 font-bold uppercase text-4xl leading-58 tracking-lg mb-6">
            XX99 Mark II Headphones
          </p>

          <p className="text-white-100 opacity-75 text-smii mb-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button primary uppercase content="See product" />
        </div> */}

        {/* <div className="py-40">
          <img src={HeroImage} className="" alt="headphone" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
