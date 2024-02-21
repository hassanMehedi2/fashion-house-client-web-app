
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        

        return (
            <span key={index}>
                {stars>= index + 1 ? ( <FaStar className=" icon"></FaStar>)
                : (<AiOutlineStar className="icon "></AiOutlineStar>)
        }
                </span>
        );

    });

    return (
        <div className="flex text-orange-500">
            {ratingStar}
        </div>
    );
};

export default StarRating;