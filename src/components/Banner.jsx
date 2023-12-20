import { TypeAnimation } from "react-type-animation";
import banner from "../assets/banner.jpg"
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-red-400">Discover the <span className="text-yellow-400">Future</span></h1>
            <div className="text-white">
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Electrify Your Life',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Explore Our Latest Electronics Collection',
        1000,
        'Elevate Your Lifestyle with Electronics',
        1000,
        'Revolutionize Your World',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </div>
         <Link to={'/allProducts'}> <button className="btn btn-outline btn-primary rounded-lg mt-5 text-xl font-medium">Explore</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
