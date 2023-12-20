import { Link } from "react-router-dom";

import appleBrand from "../assets/apple-band.png";
import samsungBrand from "../assets/samsung-band.jpg";
import googleBrand from "../assets/gogle-band.jpg";
import sonyBrand from "../assets/sony-band.jpg";
import oppoBrand from "../assets/oppo-band.png";
import onePlusBrand from "../assets/onePlus-band.png";

const BrandList = () => {
  const brands = [
    {
      name: "Apple",
      image: appleBrand,
      description: "Trendy Bands for Every Look",
    },
    {
      name: "Samsung",
      image: samsungBrand,
      description: "Discover Our Samsung Band Collection",
    },
    {
      name: "Google",
      image: googleBrand,
      description: "Transform Your Look with Google Bands",
    },
    {
      name: "Sony",
      image: sonyBrand,
      description: "Premium Bands for Every Style",
    },
    {
      name: "Oppo",
      image: oppoBrand,
      description: "Discover Our Collection of Oppo Bands",
    },
    {
      name: "OnePlus",
      image: onePlusBrand,
      description: "Elevate Your Tech, Wear Your Statement",
    },
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold md:max-w-7xl mx-auto text-center md:text-start mb-4">
        Products by <span className="text-orange-400">Brand:</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:max-w-7xl mx-auto justify-center">
        {brands.map((brand) => (
          <Link key={brand.name} to={`/products/${brand.name}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="rounded-lg">
                <img
                  className="h-52 w-full object-cover rounded-lg"
                  src={brand.image}
                  alt={`${brand.name} Band`}
                />
              </div>
              <div className="card-body">
                <h2 className="card-title">{brand.name}</h2>
                <p>{brand.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
