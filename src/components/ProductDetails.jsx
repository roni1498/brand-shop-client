import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const productLoaded = useLoaderData()
  const { _id, productName, brandName, productType, price, shortDescription, rating, image } = productLoaded;

  const [selectedRating, setSelectedRating] = useState(rating);
  
  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

  // handle add to cart
  const handleAddToCart = () => {
    const addCartProduct = {
      productName,
      brandName,
      productType,
      price,
      shortDescription,
      rating,
      image
    };
    console.log(addCartProduct, "product add to cart");
    // data send to the server
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product added to Cart",
          });
        }
      });
  };
    return (
        <div>
          <div>
            <Navbar></Navbar>
          </div>
        <div className="w-full h-screen lg:flex flex-start">
          <div className="relative lg:w-1/2 h-full flex flex-col">
            <img src={image} className="w-full h-full object-cover" alt="image" />
          </div>
          <div className="lg:w-1/2 h-full p-20">
          <button className="py-1 px-2 bg-black text-white rounded-md mb-2">{productType}</button>
            <h1 className="text-2xl font-semibold text-orange-600">{productName}</h1>
              <h1 className="text-xl font-semibold my-4">Brand Name: <span className=" text-green-800">{brandName}</span></h1>
              <div className="flex gap-6">
              <h3 className="text-4xl font-normal">${price}</h3>
              <div className="rating gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              name={`rating-${productName}`}
              className={`mask mask-star-2 bg-${
                value <= selectedRating ? "orange" : "bg-orange-300"
              }-400`}
              checked={value === selectedRating}
              onChange={() => handleRatingChange(value)}
            />
          ))}
        </div>
              </div>
              <p className="my-4 font-medium">
              Welcome to the future of technology with the Nexus Electro – a cutting-edge innovation that seamlessly combines performance, style, and intelligence. Elevate your digital experience and stay ahead in the fast-paced world of technology with this state-of-the-art device.
              </p>
              <div className="flex gap-2">
              <button onClick={ () => handleAddToCart(_id)} className="btn bg-slate-900 text-white font-semibold rounded-sm">Add to Cart</button>
              <button className="btn text-2xl rounded-sm"><FaHeart></FaHeart></button>
              </div>
          </div>
        </div>
        
      </div>
    );
};

export default ProductDetails;