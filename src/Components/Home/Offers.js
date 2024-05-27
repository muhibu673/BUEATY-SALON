import React from 'react'

function Offers() {
    return (
        <div className='my-10 p-10 bg-[#eb34ae] space-y-10'>

            <div className='flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-5xl font-mono text-white uppercase'>Our Latest Offer</h1>
                <div className='bg-white w-40 h-1 rounded-full' />
            </div>

            <div className='flex space-x-5'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img src={'https://beautytemple.co.uk/wp-content/uploads/2023/10/elemis-treatments.jpg'} alt="Card" className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">SPA SHOP</div>
                    </div>
                    <div className="px-6 pb-4">
                        <button className="bg-[#eb34ae] hover:bg-[#af2b83] text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                            More
                        </button>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img src={'https://beautytemple.co.uk/wp-content/uploads/2020/12/Mummy__Me2.jpg'} alt="Card" className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">MUMMY & ME</div>
                    </div>
                    <div className="px-6 pb-4">
                        <button className="bg-[#eb34ae] hover:bg-[#af2b83] text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                            More
                        </button>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img src={'https://beautytemple.co.uk/wp-content/uploads/2020/11/OfferThe_Retreat.jpg'} alt="Card" className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">OPENING OFFER</div>
                    </div>
                    <div className="px-6 pb-4">
                        <button className="bg-[#eb34ae] hover:bg-[#af2b83] text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                            More
                        </button>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img src={'https://beautytemple.co.uk/wp-content/uploads/2023/10/elemis-treatments.jpg'} alt="Card" className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">SPA SHOP</div>
                    </div>
                    <div className="px-6 pb-4">
                        <button className="bg-[#eb34ae] hover:bg-[#af2b83] text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                            More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers