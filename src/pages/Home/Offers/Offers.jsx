import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Offers = () => {


    

useEffect(() => {
    AOS.init({ duration: "800" })
}, [])
    return (
        <div data-aos="md:fade-left" className='mt-14 md:mt-32 mx-5 md:mx-12 lg:mx-32'>
             <h2 className='text-center  text-xl md:text-3xl font-bold mb-2'>Featured</h2>
            
            <p className="text-sm md:text-xl text-center mb-4 md:mb-10">Check featured products now !!</p>
            <div  className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <div>
                    <div className="hero min-h-60 md:min-h-80 rounded-sm" style={{ backgroundImage: 'url(https://i.ibb.co/SnDtV0F/pexels-juan-mendez-1536619.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20 "></div>
                        <div className="hero-content  text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5  text-lg md:text-2xl font-extrabold text-white">Fashion Month Ready <br />in Capital Shop</h1>
                                <p className="mb-5 text-xs md:text-sm">EXCLUSIVE FASHION: Elevate Your Style this Fashion Month! SHOP Now!</p>
                                <button className="px-6 text-sm py-2 bg-blue-700 text-white flex items-center gap-2 rounded-sm">View All <FaArrowRightLong></FaArrowRightLong></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero min-h-72 h-80" style={{ backgroundImage: 'url(https://i.ibb.co/kh7YCYB/freestocks-3-Q3ts-J01nc-unsplash-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20 "></div>
                        <div className="hero-content  text-neutral-content">
                        <div className="max-w-md">
                                <h1 className="mb-5 text-lg md:text-2xl font-extrabold text-white">Catch the Sun: <br />Summer Break Styles <br />From $5.99 </h1>
                                <p className="mb-5 text-sm">EXCLUSIVE FASHION: Elevate Your Style this Fashion Month! SHOP Now!</p>
                                <button className="px-6 text-sm py-2 bg-blue-700 text-white flex items-center gap-2 rounded-sm">View All <FaArrowRightLong></FaArrowRightLong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:grid flex flex-col grid-cols-6 gap-5 mt-5'>
                <div className='col-span-4'>
                    <div className="hero min-h-80 rounded-sm" style={{ backgroundImage: 'url(https://i.ibb.co/V3ZgJsw/26556-min.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20 "></div>
                        <div className="hero-content  text-neutral-content">
                        <div className="max-w-md">
                                <h1 className="mb-1text-lg md:text-3xl font-extrabold text-white">OFF SHOULDER <br />RED DRESS <br />-20%</h1>
                                <p className="mb-2 text-sm">EXCLUSIVE FASHION: Elevate Your Style this Fashion Month! SHOP Now!</p>
                                <button className="px-6 text-sm py-2 bg-white text-gray-900  flex items-center gap-2 rounded-sm">$99 | Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className="hero min-h-72 h-80" style={{ backgroundImage: 'url(https://i.ibb.co/dtR0HSV/pexels-pixabay-264917.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20 "></div>
                        <div className="hero-content text-neutral-content">
                        <div className="max-w-md">
                                <h1 className="mb-5 text-lg md:text-2xl font-bold text-white">Super <br />Summer <br />Sale</h1>
                                <p className="mb-5 text-sm">EXCLUSIVE FASHION: Elevate Your Style this Fashion Month! SHOP Now!</p>
                                <button className="px-6 text-sm py-2 bg-gray-600 text-white flex items-center gap-2 rounded-sm">View All <FaArrowRightLong></FaArrowRightLong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;