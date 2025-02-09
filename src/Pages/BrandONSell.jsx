import React from 'react';
import { Link } from 'react-router-dom';

const BrandONSell = ({brand}) => {
                    const {_id,brand_name,isSaleOn,brand_logo,category,coupons} = brand


                    return (
                    <>
                    {isSaleOn && <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                    <img className='w-full h-[300px]'
                    src={brand_logo}
                    alt={brand_name} />
                    </figure>
                    <div className="card-body">
                    <div className='flex gap-5'>
                    <img className='w-14  rounded-full' src={brand_logo} alt="" />
                    <h2 className="card-title">{brand_name}</h2>
                    </div>
                    <p className='text-xl font-medium'>Total Coupons: {coupons.length}</p>
                    <p className='text-xl font-medium'>Category: {category}</p>
                    <div className='flex justify-between items-center'>
                   <div>
                   {isSaleOn ? <Link to={`/getCode/${_id}`}><button className="btn btn-primary">View Coupons</button></Link>: <button className="btn btn-primary">View Coupons</button>}
                   </div>
                    <p className='text-xl font-medium flex  justify-end text-green-400 animate__animated animate__bounce animate__infinite	infinite'>{isSaleOn && 'Sale is ON'}</p>
                    </div>
                    
                    </div>
                    </div>}
                    </>
                    );
};

export default BrandONSell;