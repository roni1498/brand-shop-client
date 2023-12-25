import Banner from "../components/Banner";
import BrandList from "../components/BrandList";
import Footer from "../components/Footer";
import GoogleMap from "../components/GoogleMap";
import Navbar from "../components/Navbar";
import ProductCategory from "../components/ProductCategory";


const Home = () => {
    return (
        <div>
           <div className="relative">
          <Banner></Banner>
        </div>
        <div className="absolute w-full top-0 text-white">
          <Navbar></Navbar>
        </div>
        <div>
          <ProductCategory></ProductCategory>
        </div>
        <BrandList></BrandList>
        <div className="mx-auto w-[500px] mt-14">
          <h1 className="text-4xl font-semibold text-center m-4">Our <span className="text-orange-600">Location</span></h1>
        <GoogleMap></GoogleMap>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;