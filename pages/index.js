import Brands from "@/components/main-page/Brands";
import Categories from "@/components/main-page/Categories";
import Hero from "@/components/main-page/Hero";
import LastProducts from "@/components/main-page/LastProducts";
import Testimonial from "@/components/main-page/Testimonial";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";


export default function Home({ categories, products, error }) {
  useEffect(() => {
    error && toast.error(error);
  }, [])
  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <LastProducts products={products} />
      <Testimonial />
      <Brands />
    </>
  )
}


export async function getServerSideProps() {
  try {
    const resCategories = await axios.get("/categories?offset=0&limit=5");
    const resProducts = await axios.get("/products?offset=0&limit=8");
    return {
      props: {
        categories: resCategories.data,
        products: resProducts.data
      }
    }
  } catch (err) {
    return {
      props: {
        error: 'something went wrong!'
      }
    }
  }
}
