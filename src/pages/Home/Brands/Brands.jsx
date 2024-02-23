import BrandCard from "./BrandCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
  

const Brands = ({brands}) => {
    useEffect(() => {
        AOS.init({ duration: "800" })
    }, [])

    console.log(brands.length);
    return (
        <div className="">
            <h2 className="text-xl md:text-3xl text-center font-bold mt-14 mb-2 ">Popular Brands</h2>
            <p className="text-sm md:text-xl text-center mb-2 md:mb-6">Explore more than thousand products</p>
            <div     data-aos="fade-up" className=" grid grid-cols-3 md:grid-cols-3 gap-7 md:gap-10  mx-10 md:mx-28 ">
            {
                brands?.map(brand => 
                    <BrandCard  brand={brand}></BrandCard>
               )
            }
            </div>
        </div>
    );
};

export default Brands;

