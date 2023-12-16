import c11 from '../assets/c11.jpeg';
import clear from '../assets/clear1.jpeg';
import gm from '../assets/gm3.jpeg';
import nik from '../assets/nik3.jpeg';
import u31 from '../assets/u31.jpeg';

const SectionHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-4 bottom-4">
      <div className='grid grid-cols-1 gap-y-4'>
        <div className='mb-8'>
        <div className="hero h-56 w-96 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={c11} className="h-48 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-xl font-bold">Winter Jaket</h1>
              <p className="py-6">It's very comportable in women.you can use everywhare</p>
              <div className='flex p-4 justify-between'>
                <p className='mr-4'>$80</p>
              <button className="">Add</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className=''>
        <div className="hero h-56 w-96 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={clear} className="h-48  rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-xl font-bold">Clear Man</h1>
              <p className="py-6">Good Heir.you can enjoy good life </p>
              <div className='flex justify-between'>
                <p>$20</p>
              <button className="">Add</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="row-span-2">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={nik} alt="Shoes" className='w-full h-80' /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">Nike</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>

      </div>
      <div className='grid grid-cols-1 gap-y-4'>
        <div className='mb-8'>
        <div className="hero h-56 w-96 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={gm} className="h-48 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-xl font-bold">Gym Instroment</h1>
              <p className="py-6">It's very comportable in women.you can use everywhare</p>
              <div className='flex p-4 justify-between'>
                <p className='mr-4'>$100</p>
              <button className="">Add</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div className="hero h-56 w-96 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={u31} className="h-48  rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-xl font-bold">Transparent Umbrella</h1>
              <p className="py-6">It's very comportable.you can use everywhare</p>
              <div className='flex justify-between'>
                <p>$50</p>
              <button className="">Add</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionHome
