import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import SliderBanner from "./SliderBanner";
import NotAvailableProduct from "./NotAvailableProduct";


const ProductsByBrand = () => {
  const productsByBrand = useLoaderData();

  return (
    <div>
        <div className="relative">
        <SliderBanner></SliderBanner>
        </div>
        <div className="absolute w-full top-0 text-white">
          <Navbar></Navbar>
        </div>
        {productsByBrand.length > 1 ? (
        <div className="grid md:grid-cols-3 mx-auto max-w-6xl gap-8 mt-24">
          {productsByBrand.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <NotAvailableProduct></NotAvailableProduct>
      )}
  
    </div>
  );
};

export default ProductsByBrand;
