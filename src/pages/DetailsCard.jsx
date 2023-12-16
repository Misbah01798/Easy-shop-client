import axios from 'axios';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const DetailsCard = ({ details }) => {
    const {user, email}=useContext(AuthContext)
    const { _id, image, name, bname, type, price, rating, description } = details || [];
    const handleAddToCart = async () => {
        try {
          
          await axios.post('https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/cart', { name, image, price, description, bname, type, rating, email });
    
        
          Swal.fire({
            icon: 'success',
            title: 'Add Successful',
            text: 'You have successfully ADD Product.',
            text: 'Continue Your Shoping.',
        });
        } catch (error) {
          console.error('Error adding product to cart', error);
        
        }
      };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailsCard
