import { addToCart } from "@/redux/cart/action";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";


const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    await dispatch(addToCart(product, quantity));
   toast.success('product added to cart successfully!');
}

    return(
        <div className="products-card text-center">
        <Link className="p-link" href={`/products/${product.id}`}>
        <img src={product.images[0]} className="card-img-top" loading="lazy"/>
        </Link>
        <div className="card-body">
          <Link className="p-link" href={`/products/${product.id}`}>
          <h4 className="card-title">{product.title}</h4>
          </Link>
          <p>{product.category.name}</p>
          <div className="product-info d-flex justify-content-between align-items-center">
            <span className="price">
              ${product.price}
            </span>
            <div className="quantity d-flex justify-content-between">
            <i className="bi bi-dash-circle" role='button' onClick={() => {quantity > 1 && setQuantity(quantity - 1)}}></i> {quantity} <i className="bi bi-plus-circle" role='button' onClick={() => setQuantity(quantity + 1)}></i>
            </div>
          </div>
           <button className="btn btn-primary mt-2" onClick={handleAddToCart}> <i className="bi bi-cart"></i> Add to cart </button>
        </div>
      </div>
    )
}

export default ProductCard;