import React from 'react';

const Stats = () => {
    return (
        <section className='mt-20 relative bg-[url("https://i.ibb.co/Q6vt0gj/images-auto-x2.png")] bg-fixed bg-cover bg-no-repeat bg-center h-40 md:h-60 duration-300'>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className='absolute top-6 md:top-16 duration-300 container right-2 left-2'>
                <div className='flex justify-evenly gap-10'>
                    <div className='text-center'>
                        <img className='rounded-full w-12 md:w-16 h-12 md:h-16 duration-300 mx-auto bg-white p-1' src="https://www.svgrepo.com/show/458220/group.svg" alt="" />
                        <p className='font-bold text-xl md:text-2xl duration-300 mt-3'>100+</p>
                        <p className='text-primary text-base md:text-xl'>Happy Clients</p>
                    </div>
                    <div className='text-center'>
                    <img className='rounded-full w-12 md:w-16 h-12 md:h-16 duration-300 mx-auto bg-white p-1' src="https://www.svgrepo.com/show/414229/write.svg" alt="" />
                        <p className='font-bold text-xl md:text-2xl duration-300 mt-3'>200+</p>
                        <p className='text-primary ttext-base md:ext-xl'>Expert Lawyers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;