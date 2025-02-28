import Link from "next/link";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";

const ProductsPage = ({categories, pducts, pductsNumber, error}) => {
    const [products, setProducts] = useState(pducts);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [productsNumber, setProductsNumber] = useState(pductsNumber);
    const router = useRouter();
    useEffect(() => {
        error && toast.error(error);
      }, [error])

      var showFilter = () => {
        const filterColumn = document.querySelector('.filter-column');
        if(filterColumn.classList.contains('d-none')) {
          filterColumn.classList.remove('d-none');
          filterColumn.classList.add('d-block');
        }
        else {
          filterColumn.classList.remove('d-block');
          filterColumn.classList.add('d-none');
        }
      }

      const handleFilter = async (e, value) => {
        let query = {...router.query, ...value};
        if(!value.hasOwnProperty('offset' && 'limit')) {
          delete query.offset;
          delete query.limit;
          setPage(1);
        }
        if(query.title == '') {
          delete query.title;
        }
        e.preventDefault();
        setLoading(true);
        try {
          const resApi = await axios.get(`/products?${new URLSearchParams(query).toString()}`);
          setProducts(resApi.data);
          if(!query.hasOwnProperty('offset' && 'limit')) {
            setProductsNumber(resApi.data.length)
          }
          router.push(`/products?${new URLSearchParams(query).toString()}`, undefined, {shallow: true})
      } catch(err) {
          toast.error('somthing went wrong!');
      } finally {
        setLoading(false);
      }
      }

  return (
    <>
      <section className="shop-title d-flex align-items-center">
        <div className="container text-center text-light">
          <h1>Shop</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mt-3">
              <li className="breadcrumb-item">
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shop
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="filter-column col-12 d-none d-md-block col-lg-3">
             <ProductFilters handleFilter={handleFilter} categories={categories}/>
            </div>
            <div className="col-12 col-lg-9 d-flex flex-column justify-content-center"> 
              <span onClick={showFilter} className="filter-btn d-block d-md-none m-3"> <i className="bi bi-filter"></i> filter Products</span>
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center mb-5">
                     <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                     </div>
                  </div>
                ) : ( 
                   <div className="row" id="up">
                   {products && products.slice(0,9).map(product => (
                   <div key={product.id} className="col-12 col-md-6 col-xl-4 mt-3 mt-md-4">
                   <ProductCard product={product}/>
                   </div>
                   ))}
                   </div>
                )}
                <div className="pagination justify-content-center my-5">
                  {productsNumber > 9 && (
                       <Stack spacing={2}>
                       <Pagination count={Math.round(productsNumber/9)} page={page} onChange={(e) => {handleFilter(e, {offset: `${(e.target.innerText * 9) - 9}`, limit: '9'}), setPage(parseInt(e.target.innerText))}} />
                       </Stack>
                  )}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;

export async function getServerSideProps({resolvedUrl}) {
    try {
      const resCategories = await axios.get("/categories?offset=0&limit=5");
      const resProducts = await axios.get(`${resolvedUrl}`);
      return {
        props: {
          categories: resCategories.data,
          pducts: resProducts.data,
          pductsNumber: resProducts.data.length
        }
      }
    } catch(err) {
      return{
        props: {
          error: 'something went wrong!'
        }
      }
    }
}