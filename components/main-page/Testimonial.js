import Image from "next/image";

const Testimonial = () => {
    return(
        <section className="testimonial-section my-5">
        <div className="container text-center py-4">
        <h2>What clients say</h2>
        <hr className="mb-5" />
<div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-bs-ride="carousel">

  <div className="carousel-inner py-4">
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">Anna Deynah</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">John Doe</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li>
                <i className="bi bi-star-half"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-half"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">John Doe</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">Alex Rey</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li>
                <i className="bi bi-star-half"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-half"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">Anna Deynah</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">John Doe</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Image className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar"
              width={150} height={150} />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Customer</p>
            <p className="text-muted">
              <i className="bi bi-quote pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-fill"></i></li>
              <li><i className="bi bi-star-half"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div className="d-flex justify-content-center mb-4">
    <button className="carousel-control-prev position-relative" type="button"
      data-bs-target="#carouselMultiItemExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next position-relative" type="button"
      data-bs-target="#carouselMultiItemExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>
</section>
    )
}

export default Testimonial;