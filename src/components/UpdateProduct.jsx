import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const updateProduct = useLoaderData();
    const [product, setProduct] = useState(updateProduct);
    const { _id, productName, brandName, productType, price, shortDescription, rating, image } = product;
    
    const handleUpdateProduct = e =>{
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const updateProduct = { productName, brandName, productType, price, shortDescription, rating, image };
        console.log(updateProduct)

        // data send to the server
        fetch(`http://localhost:5000/single-product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data.modifiedCount > 0){
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Product Updated successfully"
              });
           }
        })
    }
    return (
        <div>
      <Navbar></Navbar>  
    <div className="bg-[#F4F3F0] p-12 max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-semibold text-center mb-12">Update Product: <span className="text-yellow-500">{productName}</span></h1>
       <form onSubmit={handleUpdateProduct}>
         {/* product and band name */}
         <div className="md:flex gap-2 mb-4">
       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Name</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="productName" defaultValue={productName} placeholder="Product Name" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Brand Name</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="brandName" defaultValue={brandName} placeholder="Band Name" />
       </label>
       </div>
        </div>

        {/* product type and price */}
        <div className="md:flex gap-2 mb-4">
       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Type</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="productType" defaultValue={productType} placeholder="Product Type" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Price</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="price" defaultValue={price} placeholder="Price" />
       </label>
       </div>
        </div>

        {/* short description and Rating */}
      <div className="md:flex gap-2 mb-4">
       <div className="form-control w-1/2">
        <label className="label">
            <span className="label-text">Short Description</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Rating</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="rating" defaultValue={rating} placeholder="Rating" />
       </label>
       </div>
      </div>

       {/* image */}
       <div className="form-control mb-6">
        <label className="label">
            <span className="label-text">Product Image</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="image" defaultValue={image} placeholder="Product Image" />
       </label>
       </div>

       {/* add product button */}
       <input type="submit" className="btn w-full" value="Update Product" />
       </form>
    </div> 
    </div>
    );
};

export default UpdateProduct;