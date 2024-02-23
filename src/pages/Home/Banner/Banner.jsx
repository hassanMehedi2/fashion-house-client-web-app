import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    
    return (
        <div>
            <div className="carousel w-full h-[30vh] md:h-[80vh]">


                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/vxs3F16/pexels-erik-mclean-4062467.jpg)' }}>
                        <div className="hero-overlay bg-black bg-opacity-30"></div>
                        <div className="hero-content  text-start w-full text-white flex justify-start max-w-xs md:max-w-xl lg:max-w-5xl ">
                            <div     data-aos="fade-up" className=" ">
                            <p className="mb-1 md:mb-5 text-sm md:text-lg font-medium">Mens Fashion Item 2024</p>
                                    <h1 className="mb-3 md:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">Get Up To <span className="text-yellow-200">50% Off</span> <br />Select Styles.</h1>
                                <button className="px-2  md:px-6 py-2 md:py-3 text-xs md:text-lg rounded-md md:rounded-lg border-0 bg-orange-500 text-white">Shop Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
                        <a href="#slide2" className="bg-white flex justify-center items-center w-8 h-8 md:w-12 md:h-12  rounded-full">❮</a>
                        <a href="#slide2" className="bg-white flex justify-center items-center w-8 h-8 md:w-12 md:h-12  rounded-full">❯</a>
                    </div>
                </div>


                {/* slide 2 */}
               

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/y5ss1Nt/pexels-vika-glitter-1619697.jpg)' }}>
                        <div className="hero-overlay bg-black bg-opacity-30"></div>
                        <div className="hero-content  text-start w-full text-white flex justify-start max-w-xs md:max-w-xl lg:max-w-5xl ">
                            <div     data-aos="fade-up" className=" ">
                            <p className="mb-1 md:mb-5 text-sm md:text-lg font-medium">Kids Fashion Item 2024</p>
                                    <h1 className="mb-3 md:mb-5text-xl md:text-4xl lg:text-5xl font-bold">Get Up To <span className="text-teal-300">50% Off</span> <br />Select Styles.</h1>
                                <button className="px-2  md:px-6 py-2 md:py-3 text-xs md:text-lg rounded-md md:rounded-lg border-0 bg-orange-500 text-white">Shop Now </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
                        <a href="#slide1" className="bg-white flex justify-center items-center w-8 h-8 md:w-12 md:h-12  rounded-full">❮</a>
                        <a href="#slide1" className="bg-white flex justify-center items-center w-8 h-8 md:w-12 md:h-12  rounded-full">❯</a>
                    </div>
                </div>


            
            </div>
        </div>
    );
};

export default Banner;