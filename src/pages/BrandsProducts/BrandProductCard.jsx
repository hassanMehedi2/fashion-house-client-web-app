import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const BrandProductCard = ({ product }) => {
    const { name, brandName, price, productType, description, productRating, image1, image2, image3 } = product;

    const [isHovered,setIsHovered] = useState(false);

    const handleMouseOver = () =>{
        setIsHovered(true);
    }
    const handleMouseOut = () =>{
        setIsHovered(false);
    }
    
    useEffect(() => {
        AOS.init({ duration: "600" })
    }, [])

    return (
        <div>
            <div className="card card-compact  shadow-xl" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
                <div className=" h-[300px] ">
                    <img src={image1} className="object-cover " alt="brand image" />
                </div>
                <div className="relative hero">
                    <div className="card-body   text-center ">
                        <h2 className="text-center text-xl font-medium">{name}</h2>
                        <div className="text-gray-500 ">
                            <p >{brandName}</p>
                            <p>{productType}</p>
                        </div>
                        <div className="flex justify-center">  <StarRating stars={productRating}></StarRating></div>
                        <p className=" mt-1 text-lg font-bold text-red-600 ">BDT {price}</p>

                    </div>
                  
                    {isHovered && (
                        <>
                            <div     data-aos="fade-up"  className="hero-overlay bg-black  bg-opacity-50 absolute inset-0"></div>
                            <div     data-aos="fade-up"  className="hero-content absolute inset-0 flex justify-center items-center">
                                <div className="space-y-2">
                                    <button className="w-full h-9 rounded-lg font-bold bg-white">Add To Cart</button>
                                   <Link to={'/updateProduct'}><button className="w-full h-9 rounded-lg font-bold bg-white">Update Product </button></Link> 
                                    <button className="w-full h-9 rounded-lg font-bold bg-white">View Details</button>
                                </div>
                            </div>
                        </>
                    )}
                   
                </div>

            </div>
        </div>
    );
};

export default BrandProductCard;