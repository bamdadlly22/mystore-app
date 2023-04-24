import Image from "next/image";
import adidas from '../../public/brands/adidas.png'
import apple from '../../public/brands/apple.png'
import gucci from '../../public/brands/gucci.png'
import huawei from '../../public/brands/huawei.png'
import ikea from '../../public/brands/ikea.png'
import mcdonalds from '../../public/brands/mcdonalds.png'
import nike from '../../public/brands/nike.png'

const Brands = () => {
    return(
        <section className="brands-section my-5 pt-4">
            <div className="container">
                <h2 className="text-center">best brands</h2>
                <hr className="mb-5" />
                <div className="row text-center mx-1 mx-md-0">
                    <div className="col">
                        <Image src={adidas}  alt="adidas"/>
                    </div>
                    <div className="col">
                        <Image src={apple}  alt="apple"/>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <Image src={gucci}  alt="gucci"/>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <Image src={huawei}  alt="huawei"/>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <Image src={ikea}  alt="ikea"/>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <Image src={mcdonalds}  alt="mcdonalds"/>
                    </div>
                    <div className="col d-none d-md-block">
                        <Image src={nike}  alt="nike"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands;