import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import SliderBanner from "./SliderBanner";


const AllProducts = () => {
    const loadedProducts = useLoaderData();
    return (
        <div>
             <div className="relative">
        <SliderBanner></SliderBanner>
        </div>
        <div className="absolute w-full top-0 text-white">
          <Navbar></Navbar>
        </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-6xl md:mx-auto mt-20">
                {
                    loadedProducts.map(product => <ProductCard 
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;