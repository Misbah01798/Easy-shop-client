import React from 'react'
import Navber from '../../component/Navber'
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAddProduct =async (e)=>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const bname = form.bname.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        console.log(image, name, bname, type, price, description, rating);
        const addData ={
            image, name, bname, type, price, description, rating
        };
        console.log(addData)

        try {
            const res =await fetch('https://assignment-servsr-ten.vercel.app/mobile', {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(addData)
                });
            const data =await res.json();
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Add Product Successful',
                    text: 'You have successfully ADD Product.',
                });
            }
        } catch (error) {
            console.log(error)
            
        }
    }
        


    return (
        <div>
            <Navber></Navber>
            <form onSubmit={handleAddProduct} className='m-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-auto space-y-4'>
                    <div className="form-control w-2/5">
                        <label className="input-group input-group-lg w-full">
                            <span>Image</span>
                            <input type="text" name='image' placeholder="image" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Name</span>
                            <input type="text" name='name' placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Brand Name</span>
                            <input type="text" name='bname' placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Type</span>
                            <input name='type' type="text" placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Price</span>
                            <input name='price' type="text" placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Short Description</span>
                            <input name='description' type="text" placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Rating</span>
                            <input name='rating' type="text" placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    
                </div>
                <div>
                    <button type="submit" className='btn bg-secondary w-full'>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
