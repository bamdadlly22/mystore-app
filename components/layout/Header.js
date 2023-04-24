import AuthContext from "@/context/AuthContext";
import { handleError } from "@/lib/helper";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const [cats, setCats] = useState(null);
  const [title, setTitle] = useState('');
  const [cart, setCart] = useState([]);
  const state = useSelector(state => state.shoppingCart);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories?offset=0&limit=5").then((res) => setCats(res.data)).catch(err => toast.error(handleError(err)));
    setCart(state.cart);
  } , [cats, state])

  const handleSearch = (e) => {
    e.preventDefault();
    if(title != '') {
      router.push(`/products?title=${title}`);
    }
  }

  return (
    <>
      <header className="header-section">
        <div className="site-info text-center p-2">
          <div className="container">
            <span>myStore, The best store to buy clothes and accessories</span>
          </div>
        </div>

        <div className="navbar p-4">
          <div className="container">
            <Link href="/" legacyBehavior>
            <a className="navbar-brand">
              myStore
            </a>
            </Link>
            <form className="d-none d-md-flex w-50" role="search">
              <input
                className="form-control me-2"
                type="search"
                onChange={e => setTitle(e.target.value)}
                placeholder="what do you want?"
                aria-label="Search"
              />
              <button onClick={e => handleSearch(e)} className="btn btn-primary" type="button">
                Search
              </button>
            </form>
            <div className="header-icons d-flex align-items-center">
              <i className="bi bi-search d-md-none"></i>
              <Link href='/cart'><i className="bi bi-bag-fill me-2"><span className="cart-length">{cart.length}</span></i></Link>
              {user ? (<Link href='/profile'><img src={user.avatar} className="rounded-5" width={40} height={40} style={{objectFit:'cover'}} /></Link>) : (<Link href='/login'><i className="bi bi-person-circle"></i></Link>)}
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse py-3 py-md-1"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className={router.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page">
                    Home
                  </a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                <Link href="/products" legacyBehavior>
                  <a
                    className={router.pathname === "/products" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    shop
                  </a>
                  </Link>
                  <ul className="dropdown-menu">
                    {cats && cats.map(cat => (
                      <li key={cat.id}>
                       <Link href={`/categories/${cat.id}/products`} legacyBehavior>
                      <a className="dropdown-item">
                        {cat.name}
                      </a>
                      </Link>
                    </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className={router.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    about us
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className={router.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    contact us
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social-icons"><i className="bi bi-instagram"></i><i className="bi bi-whatsapp"></i><i className="bi bi-twitter"></i><i className="bi bi-pinterest"></i></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
