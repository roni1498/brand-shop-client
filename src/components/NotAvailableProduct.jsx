import { Link } from "react-router-dom";
import noProductImg from '../assets/no-product.png';


const NotAvailableProduct = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Product Not Available</h1>
      <p className="py-6">We are Sorry! This brand Product is not available now. Please try again later</p>
      <img className="mx-auto mb-6" src={noProductImg} alt="NO Product" />
      <Link to={"/"}><button className="btn rounded-lg btn-outline btn-secondary">Go Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default NotAvailableProduct;