import { Link } from "react-router-dom";
import sliderBanner1 from "../assets/Slider-1.jpg";
import sliderBanner2 from "../assets/Slider-2.jpg";
import sliderBanner3 from "../assets/Slider-3.jpg";
import sliderBanner4 from "../assets/Slider-4.jpg";
import { FaAngleLeft, FaAngleRight, FaShoppingBag  } from "react-icons/fa";


const SliderBanner = () => {
  return (
    <div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={sliderBanner4} className="w-full object-cover" />
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
        <a href="#slide4" className="btn text-xl"><FaAngleLeft></FaAngleLeft></a> 
        <a href="#slide2" className="btn text-xl"><FaAngleRight></FaAngleRight></a>
      </div>
      <div className='absolute mt-36 lg:left-28 left-28 md:max-w-4xl max-w-sm'>
          <h3 className='lg:text-5xl text-xl text-orange-500   mb-6'>Unleash Innovation with Our Cutting-Edge Smartphones!</h3>
          <p className="text-white md:font-medium mb-6">Discover the latest in mobile technology with our sleek and powerful smartphones. <br />Elevate your communication and entertainment experience.</p>
            <Link to={'/allProducts'}><button className='flex items-center gap-1 md:text-lg md:px-4 px-2 md:py-2 py-1 bg-orange-600 hover:bg-slate-700 rounded-lg text-white md:font-semibold'><FaShoppingBag /> Shop Now </button></Link>
          </div>
         
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src={sliderBanner2} className="w-full object-cover" />
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
        <a href="#slide1" className="btn text-xl">❮</a> 
        <a href="#slide3" className="btn text-xl">❯</a>
      </div>
      <div className='absolute mt-36 lg:left-28 left-28 md:max-w-4xl max-w-sm'>
          <h3 className='lg:text-5xl text-xl text-orange-500 mb-6'>Capture Life Moments with Precision – Explore Our Camera Collection!</h3>
          <p className="text-white md:font-medium mb-6">Unleash your creativity with our advanced cameras. From stunning landscapes to perfect portraits, our devices redefine photography excellence.</p>
          <Link to={'/allProducts'}><button className='flex items-center gap-1 md:text-lg md:px-4 px-2 md:py-2 py-1 bg-orange-600 hover:bg-slate-700 rounded-lg text-white md:font-semibold'><FaShoppingBag /> Shop Now </button></Link>
          </div>
          
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src={sliderBanner3} className="w-full object-cover" />
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
        <a href="#slide2" className="btn text-xl">❮</a> 
        <a href="#slide4" className="btn text-xl">❯</a>
      </div>
      <div className='absolute mt-36 lg:left-28 left-28 md:max-w-4xl max-w-sm'>
          <h3 className='lg:text-5xl text-xl text-white mb-6'>Stay Connected and Stylish – Introducing Our Smartwatch Collection!</h3>
          <p className="text-white md:font-medium mb-6">Enhance your lifestyle with our smartwatches. Stay connected, track your fitness, and make a style statement – all from the convenience of your wrist.</p>
          <Link to={'/allProducts'}><button className='flex items-center gap-1 md:text-lg md:px-4 px-2 md:py-2 py-1 bg-orange-600 hover:bg-slate-700 rounded-lg text-white md:font-semibold'><FaShoppingBag /> Shop Now </button></Link>
          </div>
        
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src={sliderBanner1} className="w-full object-cover" />
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
        <a href="#slide3" className="btn text-xl">❮</a> 
        <a href="#slide1" className="btn text-xl">❯</a>
      </div>
      <div className='absolute mt-36 lg:left-28 left-28 md:max-w-4xl max-w-sm'>
          <h3 className='lg:text-5xl text-xl text-white mb-6'>Immerse Yourself in Premium Sound – Explore Our High-Quality Headphones!</h3>
          <p className="text-white md:font-medium mb-6">Elevate your audio experience with our premium headphones. Immerse yourself in crystal-clear sound and enjoy music, movies, and calls with unparalleled clarity.</p>
         <Link to={'/allProducts'}><button className='flex items-center gap-1 md:text-lg md:px-4 px-2 md:py-2 py-1 bg-orange-600 hover:bg-slate-700 rounded-lg text-white md:font-semibold'><FaShoppingBag /> Shop Now </button></Link>
          </div>
         
    </div>
  </div>
  );
};

export default SliderBanner;
