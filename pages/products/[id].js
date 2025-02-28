import ProductCard from "@/components/ProductCard";
import { addToCart } from "@/redux/cart/action";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const ProductPage = ({product, relatedProducts, error}) => {
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        error && toast.error('something went wrong!');
      }, [error])

    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        await dispatch(addToCart(product, quantity));
       toast.success('product added to cart successfully!');
    }

    return(
        <>
            {product && (
                   <section className="py-0 py-md-4">
                   <div className="container my-5">
                       <div className="row gx-4 gx-lg-5 align-items-center">
                           <div className="product-images col-md-6 d-flex flex-row-reverse"><img className="card-img-top mb-4 mb-md-0 rounded-4 w-75" src={product.images[0]} alt="..." />
                           <div className="d-flex flex-column justify-content-between me-2">
                           {product.images.length > 1 && product.images.map((i, index) => ( index != 0 &&
                           <Link key={index} href={product.images[index]}><img className="image-gallery mb-4 mb-md-0 rounded-4" style={{width: '100%', height: '220px', objectFit: 'cover'}} src={product.images[index]} alt="..." /></Link>
                           ))}
                            </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">category: {product.category.name}</div>
                               <h1 className="display-5 fw-bolder">{product.title}</h1>
                               <div className="fs-3 my-3">
                                   <span>${product.price}</span>
                               </div>
                               <p className="lead">{product.description}</p>
                               <div className="d-flex mt-4">
                               <div className="quantity d-flex justify-content-between me-4" style={{width: '100px'}}>
                                <i className="bi bi-dash-circle" role='button' onClick={() => {quantity > 1 && setQuantity(quantity - 1)}}></i> {quantity} <i role='button' className="bi bi-plus-circle" onClick={() => setQuantity(quantity + 1)}></i>
                                </div>
                                   <button onClick={handleAddToCart} className="btn btn-primary flex-shrink-0" type="button">
                                       <i className="bi-cart-fill me-1"></i>
                                       Add to cart
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
            )}
             <section className="related-products py-5 bg-light">
                <div className="container pb-5 px-4 px-lg-4 mt-5">
                <h2 className="fw-bolder mb-4">Related products</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {relatedProducts && relatedProducts.map(p => (
                <div key={p.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                <ProductCard product={p}/>
                </div>
                ))}

                </div>
            </div>
        </section>
        </>
    )
}

export default ProductPage;


export const getServerSideProps = async ({query}) => {
    try {
        const res = await axios.get(`/products/${query.id}`)
        const resProducts = await axios.get(`/products?categoryId=${res.data.category.id}&offset=0&limit=4`); 
        return {
            props: {
                product: res.data,
                relatedProducts: resProducts.data
            }
        }
    } catch(err) {
        return {
            props: {
                error: 'something went wrong!'
            }
        }
    }
}