import Link from "next/link";

const Categories = ({ categories }) => {
    return (
        <>
            <section className="categories-section">
                <div className="container text-center">
                    <h2 className="">Product Categories</h2>
                    <hr />
                    <div className="category-boxes d-flex flex-column flex-lg-row justify-content-between align-items-center mt-0 mt-lg-5">
                        {categories && categories.map(category => (
                            <div key={category.id} className="category-item mt-5 mt-lg-1">
                                <Link href={`/categories/${category.id}/products`} >
                                    <img className="cat-img" src={category.image} />
                                    <h4 className="mt-4">{category.name}</h4>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories;