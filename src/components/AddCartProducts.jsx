import { useLoaderData } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";
import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const AddCartProducts = () => {
  const addCartProducts = useLoaderData();
  const [products, setProducts] = useState(addCartProducts);
  const [quantities, setQuantities] = useState({});

// function for toggole increase decrease quantity of product
  const setQuantity = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

//   remove product from database and client side
    const handleDelete = _id =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
        fetch(`http://localhost:5000/addToCart/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                  });
                  if(data.deletedCount>0){
                        const remaining = products.filter(product => product._id !== _id);
                        setProducts(remaining)
                  }
                }
            });
            
        })
    }

  return (
    <div>
      <Navbar></Navbar>

      <div className="overflow-x-auto max-w-7xl mx-auto mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => ( <tr key={product._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image} alt="image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.productName}</div>
              <div className="text-sm opacity-50">{product.brandName}</div>
            </div>
          </div>
        </td>
        <td>
          ${product.price}
        </td>
        <td><CartAmountToggle 
         amount={quantities[product._id] || 1}
         setDecrease={() => setQuantity(product._id, Math.max(1, (quantities[product._id] || 1) - 1))}
         setIncrease={() => setQuantity(product._id, Math.min(10, (quantities[product._id] || 1) + 1))}
         ></CartAmountToggle></td>
        <th>
          <button className="btn btn-ghost btn-xs">${product.price * (quantities[product._id] || 1)}</button>
        </th>
        <td>
            <button onClick={()=>handleDelete(product._id)} className="btn rounded-lg">X</button>
        </td>
      </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AddCartProducts;
