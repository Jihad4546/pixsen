import React from 'react';
import PhotoCart from './PhotoCart';

const TopGaraneted = async () => {
    const res = await fetch('https://promtp-rho.vercel.app/data.json')
    const data = await res.json()
    const topPhotos = data.slice(0, 8);
    console.log(topPhotos)
    return (
        <div className="bg-black text-white">
            <div className='container mx-auto'>
                <h1 className='text-2xl font-bold pt-3 text-white'>Top Ganarations Photos</h1>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        topPhotos.map(photos=><PhotoCart photos={photos} key={photos.id}></PhotoCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopGaraneted;