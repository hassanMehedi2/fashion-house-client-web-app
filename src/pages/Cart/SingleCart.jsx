
import { useEffect } from "react";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
const SingleCart = ({ item, currentItems, setCurrentItems }) => {
    const { _id, name, brandName, price, productType, image1 } = item;



    const handleDeleteCart = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://fashion-house-server-web-app.vercel.app/cart/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = currentItems?.filter(item => _id !== item._id);
                            setCurrentItems(remaining);
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Product Deleted Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }


    return (
        <div className="bg-white rounded-xl p-5 mb-5">
          
            <div className="grid grid-cols-4  ">
                <div className="h-36 w-32 ">
                    <img className="w-full object-cover h-full" src={image1} alt="" />
                </div>
                <div className="col-span-3 mx-10  flex items-center justify-between ">
                    <div >
                        <p className="text-lg lg:text-xl font-semibold " >{name}</p>
                        <p className="" >{brandName}</p>
                        <p className="" >{productType}</p>
                        <div className="flex gap-10 mt-2">
                            <p>quantity : 1</p>
                            <p className="text-base lg:text-xl font-semibold  text-gray-700 ">৳ {price}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleDeleteCart} ><MdDeleteForever className="text-2xl text-red-600 "></MdDeleteForever></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCart;