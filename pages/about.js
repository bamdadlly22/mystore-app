import Image from 'next/image';
import aboutImage from '../public/images/5.jpg'
const aboutPage = () => {
    return(
        <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center mt-5">
            <div className="col-lg-7"><Image className="img-fluid rounded mb-4 mb-lg-0" src={aboutImage} alt="about us" /></div>
            <div className="col-lg-5">
                <h1 className="font-weight-light mb-3">About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a className="btn btn-primary" href="#"><i className="bi bi-telephone"></i> contact us</a>
            </div>
        </div>
    </div>
    )
}

export default aboutPage;