import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    productName,
    brandName,
    productType,
    price,
    shortDescription,
    rating,
    image,
  } = product;
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

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
    fetch("https://brandshop-backend.vercel.app/addToCart", {
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
    <div className="card h-[500px] w-[300px] bg-base-100 shadow-xl mx-auto">
      <div>
        <img className="object-contain h-52 w-full" src={image} alt="Shoes" />
      </div>
      <div className="card-body">
        <div className="card-actions">
          <div className="badge badge-outline">Stock Ready</div>
          <div className="badge badge-outline">Official Store</div>
        </div>
        <h2 className="text-xl font-semibold">{productName}</h2>
        <p className="font-semibold">Brand Name: {brandName}</p>
        <p className="font-semibold">Price: ${price}</p>
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
        <div className="flex gap-2">
          <button
            onClick={ () => handleAddToCart(product._id)}
            className="btn bg-orange-500 text-white rounded-lg"
          >
            Add to Cart
          </button>
         <Link to={`/updateProduct/${_id}`}> <button className="btn rounded-lg text-xl">
            <GrUpdate></GrUpdate>
          </button></Link>
         <Link to={`/productDetails/${_id}`}> <button className="btn rounded-lg text-xl">
            <FaEye></FaEye>
          </button></Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
