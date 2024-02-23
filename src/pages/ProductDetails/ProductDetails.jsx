import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Nav/Navbar";
import StarRating from "../BrandsProducts/StarRating";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const product = useLoaderData();

    const { name, brandName, price, productType, description, productRating, image1, image2, image3 } = product;

    const  handleAddToCart = ()=>{
      
        

        fetch('https://fashion-house-server-web-app.vercel.app/cart',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Product Added to Cart Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-10 lg:mx-28  md:grid grid-cols-2 gap-5 mt-10" >
                <div className=" ">
                    <div className="h-[250px] w-[80%] md:h-[250px] md:w-[80%] lg:h-[440px] lg:w-[80%] mx-auto p-5">
                        <img className="object-cover h-full w-full" src={image1} alt="" />
                    </div>
                    <div className="flex gap-5 justify-center">
                        <div className="h-30 w-26 md:h-40 md:w-36">    <img className="h-full object-cover" src={image2} alt="" /></div>
                        <div className="h-30 w-26 md:h-40 md:w-36">    <img className="h-full object-cover" src={image3} alt="" /></div>

                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
                    <div className="flex gap-5  items-center mt-3">
                        <h2 className="text-lg md:text-2xl font-bold  text-red-600"> ৳ {price} </h2>
                        <StarRating stars={productRating}></StarRating>
                    </div>

                    <p className="text-base md:text-lg font-medium text-orange-600  mt-6 text-justify">DESCRIPTION</p>
                    <p className="text-base md:text-lg  text-gray-600  text-justify">{description}</p>


                    <p className="mt-5 text-gray-700"><span className="font-medium">Brand :</span> {brandName}</p>
                    <p className="mt-2">Category : {productType}</p>

                    <div className="mt-5">
                        <button onClick={handleAddToCart} className="bg-black text-white font-semibold rounded-lg px-5 py-3">Add To Cart</button>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div><p className="text-gray-500">Compare</p></div>
                        <div><p className="text-gray-500">Add to the wishlist</p></div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;