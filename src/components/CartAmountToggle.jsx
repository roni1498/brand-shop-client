import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
    return (
        <div className="cart-button">
            <div className="join rounded-lg">
                <button className="btn join-item" onClick={() => setDecrease()}><FaMinus></FaMinus></button>
                <button className="btn join-item">{amount}</button>
                <button className="btn join-item" onClick={() => setIncrease()}><FaPlus></FaPlus></button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CartAmountToggle;