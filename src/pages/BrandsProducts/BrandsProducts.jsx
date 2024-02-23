import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Nav/Navbar";
import BrandProductCard from "./BrandProductCard";
import Filter from "./Filter";


const BrandsProducts = () => {
    const products = useLoaderData({});
    const { brand } = useParams();

    return (
        <div >
            <Navbar></Navbar>
            <div className="mx-8">
                <div className="h-40 hero" style={{ backgroundImage: 'url(https://i.ibb.co/kgZVVfc/pexels-jarrod-erbe-451709dddddddddddd8.jpg)' }}>
                    <div className="hero-overlay bg-black bg-opacity-40"></div>
                    <div className="hero-content" >
                        <h2 className="text-center text-xl md:text-3xl font-semibold my-8 text-white">Brand Name :  {brand}</h2>
                    </div>
                </div>

                <p className="text-sm my-5">Showing {products.length} products</p>
                <div className="grid lg:grid-cols-4 mt-8">
                    {/* filter */}
                    <div>
                        <Filter></Filter>
                    </div>


                    <div className="lg:col-span-3">
                        {
                            (products.length == 0) && <div className="flex items-center text-center justify-center w-2/3 h-1/2"> <h2 className="text-lg">no product found</h2></div>
                        }
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">

                            {
                                products && products?.map(product => <BrandProductCard key={product._id}
                                    product={product}
                                >
                                </BrandProductCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsProducts;