import { decrement, increment, removeFromCart } from "@/redux/cart/action";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import emptyCart from '../public/images/empty-cart.png';

const cartPage = () => {
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);
    const state = useSelector(state => state.shoppingCart);
    var totalPrice = cart.reduce((acc, obj) => {return acc + (obj.price * obj.qty)},0)
    useEffect(() => {
      setCart(state.cart);
    },[state])

    const handleCheckout = () => {
      Swal.fire({
        icon: 'success',
        title: 'The purchase was made successfully'
      });
    }

    const handleIncrement = async (id) => {
        await dispatch(increment(id));
       toast.success('product added successfully!');
    }

    const handleDecrement = async (id) => {
      await dispatch(decrement(id));
      toast.success('product deleted successfully!');
    }

    const handleRemove = async (id) => {
      await dispatch(removeFromCart(id));
      toast.success('product removed from cart!');
    }

    if (cart == null) {
        return (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border"></div>
          </div>
        );
      }

    return(
        <>
        {cart.length != 0 ? (
               <section className="cart-page mt-4">
               <div className="container py-5 h-100">
                 <div className="row d-flex justify-content-center align-items-center">
                   <div className="col-12">
                     <div className="card" style={{borderRadius: '15px'}}>
                       <div className="card-body p-0">
                         <div className="row g-0">
                           <div className="col-lg-8">
                             <div className="p-5">
                               <div className="d-flex justify-content-between align-items-center mb-5">
                                 <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                 <h6 className="mb-0 text-muted">{cart.length} Items</h6>
                               </div>
             
                               {cart.map(c => (
                                 <>
                                 <hr className="my-4"/>
                                 <div key={c.id} className="row mb-4 d-flex justify-content-between align-items-center">
                                   <div className="col-md-2 col-lg-2 col-xl-2">
                                     <img
                                       src={c.images[0]}
                                       className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                   </div>
                                   <div className="col-md-3 col-lg-3 col-xl-3">
                                     <h6 className="text-muted">{c.category.name}</h6>
                                     <h6 className="text-black mb-0">{c.title}</h6>
                                   </div>
                                   <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                   <div className="quantity d-flex justify-content-between">
                                    <i className="bi bi-dash-circle" role='button' onClick={() => {c.qty > 1 && handleDecrement(c.id)}}></i> {c.qty} <i className="bi bi-plus-circle" role='button' onClick={() => handleIncrement(c.id)}></i>
                                    </div>
                                   </div>
                                   <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                     <h6 className="mb-0">${c.price}</h6>
                                   </div>
                                   <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                     <i className="bi bi-x-lg" role='button' onClick={() => handleRemove(c.id)}></i>
                                   </div>
                                 </div>
                                 </>
                               ))}
                               
            
                               <hr className="my-2"/>
             
                               <div className="pt-4">
                                 <h6 className="mb-0"><Link href="/products" legacyBehavior><a className="btn btn-secondary"><i className="bi bi-arrow-left"></i> Back to shop</a></Link></h6>
                               </div>
                              </div>
                              </div>
                              <div className="col-lg-4 bg-light">
                              <div className="p-5">
                               <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
             
                               <h5 className="text-uppercase mb-3">coupon code</h5>
             
                               <form className="row g-3 mb-5">
                               <div className="col-9">
                                   <input type="text" id="form3Examplea2" placeholder="Enter your coupon" className="form-control form-control-lg" />
                               </div>
             
                               <div className="col-3">
                              <button type="button" className="btn btn-secondary btn-lg mb-3" onClick={() => toast.error('The coupon is not correct!')}>submit</button>
                             </div>                  
                             </form>
             
                               <hr className="my-3"/>
                               <div className="d-flex justify-content-between mb-3">
                                 <h5 className="text-uppercase">Subtotal</h5>
                                 <h5>${totalPrice}</h5>
                               </div>
             
                               <hr className="my-3"/>
                               <div className="d-flex justify-content-between mb-3">
                                 <h5 className="text-uppercase">coupon</h5>
                                 <h5>$0</h5>
                               </div>
             
                               <hr className="my-3"/>
                               <div className="d-flex justify-content-between mb-3">
                                 <h5 className="text-uppercase">Shipping</h5>
                                 <h5>$0</h5>
                               </div>
             
                               <hr className="my-4"/>
                               <div className="d-flex justify-content-between mb-3 text-success">
                                 <h5 className="text-uppercase">total price</h5>
                                 <h5>${totalPrice}</h5>
                               </div>
             
             
                               <button type="button" className="btn btn-primary btn-block btn-lg mt-4"
                                 data-mdb-ripple-color="dark" onClick={handleCheckout}>Checkout</button>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
        ) : 
        <div className="my-5 pb-3 d-flex flex-column align-items-center justify-content-center">
          <Image src={emptyCart} width={375} height={375} alt="empty-cart"/>
          <h4 className="mt-0 mb-4">Your cart is empty!</h4>
          <Link href="/products" legacyBehavior><a className="btn btn-secondary"><i className="bi bi-arrow-left"></i> Back to shop</a></Link>
        </div>
        }
        </>
    )
}

export default cartPage;