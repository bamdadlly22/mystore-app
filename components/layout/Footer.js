const Footer = () => {
    return(
        <>

<footer
        className="text-center text-lg-start text-white"
        style={{background: '#363535'}}
        >
  <section
           className=""
           style={{background: '#fd900f'}}
           >
                    <div className="container my-5 d-flex justify-content-between py-4">

    <div className="me-5">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="text-white me-4">
      <i className="bi bi-instagram"></i>
      </a>
      <a href="" className="text-white me-4">
      <i className="bi bi-whatsapp"></i>
      </a>
      <a href="" className="text-white me-4">
      <i className="bi bi-pinterest"></i>
      </a>
      <a href="" className="text-white me-4">
      <i className="bi bi-twitter"></i>
      </a>
    </div>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5 py-4">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold">Company name</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', background: '#7c4dff', height: '2px'}}
              />
          <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold">Products</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', background: '#7c4dff', height:'2px'}}
              />
          <p>
            <a href="#!" className="text-white">clothes</a>
          </p>
          <p>
            <a href="#!" className="text-white">Electronics</a>
          </p>
          <p>
            <a href="#!" className="text-white">nuevo</a>
          </p>
          <p>
            <a href="#!" className="text-white">Shoes</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', background: '#7c4dff', height: '2px'}}
              />
          <p>
            <a href="#!" className="text-white">Your Account</a>
          </p>
          <p>
            <a href="#!" className="text-white">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!" className="text-white">Shipping Rates</a>
          </p>
          <p>
            <a href="#!" className="text-white">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', background: '#7c4dff', height: '2px'}}
              />
          <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </div>
      </div>

    </div>
  </section>

  <div
       className="text-center p-3"
       style={{background: 'rgba(0, 0, 0, 0.2)'}}
       >
    Developed by:
    <a className="text-white" href=""
       > Bamdad Laali</a>
  </div>
</footer>

{/* </div> */}
</>
    )
}

export default Footer;