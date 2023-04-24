import Image from "next/image";
import ProductCard from "../ProductCard";

const LastProducts = ({ products }) => {
  return (
    <section className="products-section">
      <div className="container text-center">
        <h2>Newest Products</h2>
        <hr className="mb-4" />
        <div className="products-cards">
            <div className="row gx-4 mx-3 mx-md-0">
                {products && products.map(product => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                <ProductCard product={product}/>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default LastProducts;
