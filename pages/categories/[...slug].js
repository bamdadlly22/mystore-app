import { handleError } from "@/lib/helper";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";


const ProductsCategoryPage = ({pducts, pductsNumber, category, error}) => {
    const router = useRouter();
    const [products, setProducts] = useState(pducts);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [productsNumber, setProductsNumber] = useState(pductsNumber);

    useEffect(() => {
        error && toast.error(error);
        setProducts(pducts);
        setPage(1);
      }, [error, pducts])

      const handlePaginate = async (e, value) => {
        console.log(value)
        e.preventDefault();
        setLoading(true);
        let offsetPage = (value * 9) - 9;
        try {
          const resApi = await axios.get(`/categories/${category.id}/products?offset=${offsetPage}&limit=12`);
          setProducts(resApi.data);
          setPage(value)
          router.push(`/categories/${category.id}/products?offset=${offsetPage}&limit=12#up`, undefined, {shallow: true})
      } catch(err) {
          toast.error('somthing went wrong!');
      } finally {
        setLoading(false);
      }
      }
    
    return(<>
          <section className="shop-title d-flex align-items-center">
        <div className="container text-center text-light">
          <h1>{category.name}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mt-3">
              <li className="breadcrumb-item">
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {category.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
                {loading ? (
                  <div class="d-flex justify-content-center align-items-center mb-5">
                     <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                     </div>
                  </div>
                ) : ( 
                   <div className="row" id="up">
                   {products && products.slice(0,12).map(product => (
                   <div key={product.id} className="col-12 col-md-6 col-xl-3 mt-3 mt-md-4">
                   <ProductCard product={product}/>
                   </div>
                   ))}
                   </div>
                )}
                <div className="pagination justify-content-center my-5">
                  {productsNumber > 12 && (
                       <Stack spacing={2}>
                       <Pagination count={Math.round(productsNumber/12)} page={page} onChange={handlePaginate} />
                       </Stack>
                  )}
                </div>
          </div>
        </div>
      </section>
    </>)
}

export default ProductsCategoryPage;

export async function getServerSideProps({resolvedUrl, query}) {
    try {
      const resProducts = await axios.get(`${resolvedUrl}`);
      const resCategory = await axios.get(`/categories/${query.slug[0]}`)
      return {
        props: {
          pducts: resProducts.data,
          pductsNumber: resProducts.data.length,
          category: resCategory.data
        }
      }
    } catch(err) {
      return{
        props: {
          error: handleError(err)
        }
      }
    }
}