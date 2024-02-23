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
        <div className={`${isHovered ? 'scale-105 transition-transform duration-300 ' : 'transition-transform duration-300 '}`} >
            <div className="card card-compact  shadow-xl" 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
                <div className="h-[160px] md:h-[230px] lg:h-[300px] ">
                    <img src={image1} className="object-cover " alt="brand image" />
                </div>
                <div className="relative hero">
                    <div className="card-body   text-center ">
                        <h2 className="text-center text-lg md:text-xl font-medium">{name}</h2>
                        <div className="text-gray-500 ">
                            <p >{brandName}</p>
                            <p>{productType}</p>
                        </div>
                        <div className="flex justify-center">  <StarRating stars={productRating}></StarRating></div>
                        <p className=" mt-1 text-base md:text-lg font-bold text-red-600 ">BDT {price}</p>

                    </div>
                  
                    {isHovered && (
                        <>
                            <div     data-aos="fade-up"  className="hero-overlay bg-black  bg-opacity-50 absolute inset-0"></div>
                            <div     data-aos="fade-up"  className="hero-content absolute inset-0 flex justify-center items-center">
                                <div className="flex flex-col w-full gap-2">
                                   
                                   <Link to={`/updateProduct/${product._id}`} className=""><button className="w-full h-9 rounded-lg font-bold bg-white">Update Product </button></Link> 
                                   <Link to={`/product/${product._id}`} className="">  <button className="w-full h-9 rounded-lg font-bold bg-white">View Details</button></Link> 
                                  
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