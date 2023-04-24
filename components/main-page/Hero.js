import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import img2 from "../../public/images/2.jpg"
import img3 from "../../public/images/3.jpg"
import img4 from "../../public/images/4.jpg"



const Hero = () => {
    return(
        <section className="hero-section">
 <div id="heroCarousel" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={img3} loading="eager" fill objectFit="cover" alt="hero-image1" />
      <div className="carousel-caption d-block">
        <h1 className="mb-3">Selling all kinds of clothes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <Link href="/products" legacyBehavior>
        <a className="btn btn-primary btn-lg mt-2">go to store</a>
        </Link>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={img2} loading="eager" fill objectFit="cover" alt="hero-image2" />
      <div className="carousel-caption d-block">
        <h2 className="mb-3">Sale of shoes and sneakers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <Link href="/products" legacyBehavior>
        <a className="btn btn-primary btn-lg mt-2">go to store</a>
        </Link>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={img4} loading="eager" fill objectFit="cover" alt="hero-image3"/>
      <div className="carousel-caption d-block">
        <h2 className="mb-3">The newest accessories</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <Link href="/products" legacyBehavior>
        <a className="btn btn-primary btn-lg mt-2">go to store</a>
        </Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </section>
    )
}

export default Hero;