import { useLoaderData, useParams } from "react-router-dom";

import { useState } from "react";
import Swal from 'sweetalert2'
import Navbar from "../Shared/Nav/Navbar";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { name, brandName, price, productType, description, productRating, image1, image2, image3 } = product;


    const [brand, setBrand] = useState(brandName);
    const [type, setType] = useState(productType);
    const [rating, setRating] = useState(productRating);

    const handleBrandChange = e => {
        setBrand(e.target.value);
    }
    const handleTypeChange = e => {
        setType(e.target.value);
    }
    const handleRatingChange = e => {
        setRating(e.target.value);
    }


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = brand;
        const price = form.price.value;
        const productType = type;
        const description = form.description.value;
        const productRating = rating;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;

        const UpdatedProduct = { name, brandName, price, productType, description, productRating, image1, image2, image3 };
        console.log(product);

        // send data to server to save into database 
        fetch(`https://fashion-house-server-web-app.vercel.app/updateProduct/${product._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Product Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }


    return (
        <div className="mx-10 ">
            <Navbar></Navbar>

            <div className="card shrink-0 w-full   bg-base-200  " >
                <form onSubmit={handleUpdate} className="card-body">

                    <h2 className="text-center text-3xl font-semibold mt-5 mb-5">Update Product <span className="text-lg font-medium">id:{product._id}</span> </h2>
                    <div className="md:flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Select Brand Name</span>
                            </label>
                            <select className="h-12 rounded-lg p-3" id="dropdown" value={brand} onChange={handleBrandChange}>
                                <option value="">Select...</option>
                                <option value="Chanel">Chanel</option>
                                <option value="Dior">Dior</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Givenchy">Givenchy</option>
                                <option value="Versace">Versace</option>
                                <option value="Ck">Ck</option>
                            </select>
                        </div>
                    </div>

                    <div className="md:flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price $" defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <select className="h-12 rounded-lg p-3" id="dropdown" value={type} onChange={handleTypeChange}>
                                <option value="">Select...</option>
                                <option value="Clothing">Clothing</option>
                                <option value="accessories">Accessories</option>
                                <option value="fragrance">Fragrances</option>
                                <option value="beauty">Beauty and Cosmetics</option>

                            </select>
                        </div>
                    </div>

                    <div className="md:flex gap-10">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="description " defaultValue={description} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select className="h-12 rounded-lg p-3" id="dropdown" value={rating} onChange={handleRatingChange}>
                                <option value="">Select...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <div className="md:flex gap-10">
                        <div className="form-control w-1/3 ">
                            <label className="label">
                                <span className="label-text">Image 1</span>
                            </label>
                            <input type="text" name="image1" placeholder="image-1 " defaultValue={image1} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3 ">
                            <label className="label">
                                <span className="label-text">Image 2</span>
                            </label>
                            <input type="text" name="image2" placeholder="image-2 " defaultValue={image2} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3 ">
                            <label className="label">
                                <span className="label-text">Image 3</span>
                            </label>
                            <input type="text" name="image3" placeholder="image-3 " defaultValue={image3} className="input input-bordered" required />
                        </div>
                    </div>
                    <input type="submit" value={'Update'} className="btn w-ful font-medium text-xl text-white bg-teal-600 mt-10 mb-14" />
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct;