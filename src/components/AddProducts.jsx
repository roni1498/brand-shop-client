import Navbar from "./Navbar";
import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAddProduct = e =>{
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const newProduct = { productName, brandName, productType, price, shortDescription, rating, image };
        console.log(newProduct)

        // data send to the server
        fetch('https://brandshop-backend.vercel.app/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Product added successfully"
              });
           }
        })
    }
  return (
    <div>
      <Navbar></Navbar>  
    <div className="bg-[#F4F3F0] p-12 max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-semibold text-center mb-12">Add <span className="text-yellow-500">Product</span></h1>
       <form onSubmit={handleAddProduct}>
         {/* product and band name */}
         <div className="md:flex gap-2 mb-4">
       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Product Name</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="productName" placeholder="Product Name" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Brand Name</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="brandName" placeholder="Band Name" />
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
       <input className="input input-bordered w-full" type="text" name="productType" placeholder="Product Type" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Price</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="price" placeholder="Price" />
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
       <input className="input input-bordered w-full" type="text" name="shortDescription" placeholder="Short Description" />
       </label>
       </div>

       <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Rating</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="rating" placeholder="Rating" />
       </label>
       </div>
      </div>

       {/* image */}
       <div className="form-control mb-6">
        <label className="label">
            <span className="label-text">Product Image</span>
        </label>
       <label >
       <input className="input input-bordered w-full" type="text" name="image" placeholder="Product Image" />
       </label>
       </div>

       {/* add product button */}
       <input type="submit" className="btn w-full" value="Add Product" />
       </form>
    </div> 
    </div>
  );
};

export default AddProducts;
