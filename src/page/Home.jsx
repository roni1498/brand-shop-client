import Banner from "../components/Banner";
import BrandList from "../components/BrandList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <div>
           <div className="relative">
          <Banner></Banner>
        </div>
        <div className="absolute w-full top-0 text-white">
          <Navbar></Navbar>
        </div>
        <BrandList></BrandList>
        <Footer></Footer>
        </div>
    );
};

export default Home;