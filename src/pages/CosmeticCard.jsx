import { Link } from "react-router-dom";


const CosmeticCard = ({cosmetic}) => {
    const { _id, image, name, bname, type, price, rating } = cosmetic;
  return (
    <div>
      
      <div className="card w-96 bg-base-100 shadow-xl">
                <div><img src={image} alt="Shoes" /></div>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">Price:{price}</div>
                    </h2>
                    <p>{bname}</p>
                    <p>{type}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"><Link to={`/details/${_id}`}>Details</Link></div>
                        <div className="badge badge-outline"><Link to={`/updateData/${_id}`}>Update</Link></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CosmeticCard
