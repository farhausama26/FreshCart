import React, { useContext, useState } from "react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { Rating } from "../Rating";
import { CartContext } from "../../context/Cart.context";


const CartItem = React.memo(({ cartItemDetails }) => {
  const { count, price, product } = cartItemDetails || {};
  const {
    title = "Product",
    imageCover = "/placeholder.jpg",
    category,
    ratingsAverage = 0,
    id,
    slug = "",
  } = product || {};

  
  const { updateQuantity, deleteProduct } = useContext(CartContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = async (newCount) => {
    if (newCount < 1 || isUpdating) return;

    setIsUpdating(true);
    try {
      await updateQuantity({ productId: id, count: newCount });
    } finally {
      setIsUpdating(false);
    }
  };


  return (
    <div
      className={`p-6 flex items-center space-x-4 ${
        isUpdating ? "opacity-70" : ""
      }`}
    >
      <img
        className="w-20 h-20 object-cover rounded-lg cursor-pointer"
        src={imageCover}
        alt={title}
        onClick={() => navigate(`/product/${id}`)}
        onError={(e) => {
          e.target.src = "/placeholder.jpg";
        }}
      />
      <div className="flex-1">
        <h3
          className="font-medium text-lg cursor-pointer"
          onClick={() => navigate(`/product/${id}`)}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-500">{category?.name}</p>
        <div className="flex items-center mt-2">
          <div className="flex text-amber-400 text-sm">
            <Rating rating={ratingsAverage} />
          </div>
          <span className="text-xs text-gray-500 ml-2">{ratingsAverage}</span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            className="p-2 hover:bg-gray-100"
            onClick={() => {
              if (count > 1) {
                handleQuantityChange(count - 1);
              }
            }}
            disabled={count <= 1}
          >
            <FontAwesomeIcon icon={faMinus} className="text-sm" />
          </button>
          <span className="px-4 py-2 border-x border-gray-300">{count}</span>
          <button
            className="p-2 hover:bg-gray-100"
            onClick={() => {
              handleQuantityChange(count + 1);
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="text-sm" />
          </button>
        </div>
        <div className="w-28 text-center text-nowrap">
          <div className="text-lg font-bold">{price * count} EGP</div>
        </div>
        <button
          className="text-red-500 hover:text-red-700 p-2"
          onClick={(()=>{
            deleteProduct({productId: id})
          })}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
});

export default CartItem;
