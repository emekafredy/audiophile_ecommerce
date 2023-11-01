import Button from '../../components/Button';
import HeroImage from '../../assets/home/desktop/image-hero.jpg';

function Hero() {
  return (
    <div className="w-full h-[800px] grid grid-cols-2 gap-4 bg-black-100">
      <div className="w-[398px] py-40">
        <p className="text-white-100 opacity-50 leading-19 tracking-xl font-regular text-sm uppercase mb-6">
          New product
        </p>
        <p className="text-white-100 font-bold uppercase text-4xl leading-58 tracking-lg mb-6">
          XX99 Mark II Headphones
        </p>

        <p className="text-white-100 opacity-75 text-smii mb-8">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button primary uppercase buttonType="submit" title="See product" />
      </div>

      <div className="py-40">
        <img src={HeroImage} className="" alt="headphone" />
      </div>
    </div>
  );
}

export default Hero;
