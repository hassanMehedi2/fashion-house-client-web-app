import { useState } from "react";
import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
        setIsHovered(false);
    };





    return (
        <div className={`${isHovered ? 'scale-125 transition-transform duration-300 ' : 'transition-transform duration-300 '}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div  className=" mx-auto lg:w-52 rounded-lg flex items-center justify-center ">
            <Link to={`/brandsProducts/${brand.brand_name}`}>
                <div className="rounded-lg p-2 w-[100px] md:w-[120px] lg:w-[160px] h-[120px]  md:h-[150px] lg:h-[190px] flex items-center">
                    <img className="object-cover " src={brand.brand_image} alt="" />
                </div>
                <div>
                    <p className="my-0 text-sm md:text-xl font-medium text-center">{brand.brand_name}</p>
                </div>
            </Link>
        </div>
        </div>
    );
};

export default BrandCard;