import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Trending = () => {
    useEffect(() => {
        AOS.init({ duration: "800" })
    }, [])
    return (
        <div  data-aos="fade-up" className='mt-16 lg:mt-36 mx-15 lg:mx-32 '>
            <h2 className='text-center text-xl md:text-3xl  font-bold mb-2'>Trending</h2>
            
            <p className="text-sm md:text-xl text-center mb-10">Check whats on trending now !!</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5 lg:gap-10 '>
                <div>
                    <img className='h-60 lg:h-80  w-full object-cover' src="https://i.ibb.co/GWC4jPp/pexels-melvin-buezo-2529148.jpg" alt="" />
                    <div className='mt-3' >
                        <p className=' text-center'>Male white shoe</p>
                        <p className=' text-center text-base  md:text-xl text-red-500'>BDT 3300</p>
                        <div className='flex justify-center mt-2'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='h-60 lg:h-80   w-full object-cover' src="https://i.ibb.co/sW0NQCh/pexels-ox-street-6540914.jpg" alt="" />
                    <div className='mt-3' >
                        <p className=' text-center'>White Male Snekers</p>
                        <p className=' text-center text-base  md:text-xl text-red-500'>BDT 3300</p>
                        <div className='flex justify-center mt-2'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img className='h-60 lg:h-80  w-full object-cover' src="https://i.ibb.co/jhzqtqp/pexels-ox-street-6540973.jpg" alt="" />
                    <div className='mt-3' >
                        <p className=' text-center'>Red strap male</p>
                        <p className=' text-center text-base  md:text-xl text-red-500'>BDT 3300</p>
                        <div className='flex justify-center mt-2'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='h-60 lg:h-80   w-full object-cover' src="https://i.ibb.co/QYvdNfx/pexels-flat-hito-904350.jpg" alt="" />
                    <div className='mt-3' >
                        <p className=' text-center'>Female bag</p>
                        <p className=' text-center text-base md:text-xl text-red-500'>BDT 3300</p>
                        <div className='flex justify-center mt-2'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Trending;