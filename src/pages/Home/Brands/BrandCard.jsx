import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    return (
        <div className=" mx-auto lg:w-52 rounded-lg flex items-center justify-center ">
            <Link>
                <div className="rounded-lg p-2 w-[160px] h-[190px] flex items-center">
                    <img className="object-cover " src={brand.brand_image} alt="" />
                </div>
                <div>
                    <p className="my-0 text-xl font-medium text-center">{brand.brand_name}</p>
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;