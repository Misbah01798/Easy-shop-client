import { useLoaderData } from "react-router-dom"
import Navber from "../component/Navber"
import Swal from "sweetalert2";


const UpdateData = () => {
    const update =useLoaderData();
    const { _id, image, name, bname, type, price, rating } = update;
    const handleUpdate =async (e)=>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const bname = form.bname.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        console.log(image, name, bname, type, price, rating);
        const updateData ={
            image, name, bname, type, price, rating
        };
        console.log(updateData)

        try {
            const res =await fetch(`https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile/${_id}`, {
                    method: "PUT",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(updateData)
                });
            const data =await res.json();
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successful',
                    text: 'You have successfully Update Data.'
                });
            }
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
        <Navber></Navber>
        <form onSubmit={handleUpdate} className='m-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-auto space-y-4'>
                    <div className="form-control w-2/5">
                        <label className="input-group input-group-lg w-full">
                            <span>Image</span>
                            <input type="text" name='image' defaultValue={image} placeholder="image" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Name</span>
                            <input type="text" name='name' defaultValue={name} placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Brand Name</span>
                            <input type="text" name='bname'defaultValue={bname} placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Type</span>
                            <input name='type' type="text" defaultValue={type} placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Price</span>
                            <input name='price' type="text" defaultValue={price} placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span>Rating</span>
                            <input name='rating' type="text" defaultValue={rating} placeholder="Type here" className="input input-bordered input-lg" />
                        </label>
                    </div>
                    
                </div>
                <div>
                    <button type="submit" className='btn text-xl text-white mt-4 bg-secondary w-full'>SUBMIT</button>
                </div>
            </form>
      
    </div>
  )
}

export default UpdateData
