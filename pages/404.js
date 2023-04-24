import Image from "next/image";
import notfoundimage from '../public/404.jpg'
import Link from "next/link";

const notfoundPage = () => {
    return(
        <>
            <div className="container my-0 my-md-4">
                <div className="row d-flex align-items-center justify-content-center text-center">
                    <Image src={notfoundimage} width={512} height={350} style={{objectFit: 'contain'}} alt="404"/>
                    <Link href='/'><button className="btn btn-primary btn-lg my-3">Go Home</button></Link>
                </div>
            </div>
        </>
    )
}

export default notfoundPage;