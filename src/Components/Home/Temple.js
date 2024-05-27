import React from 'react'

function Temple() {

    return (
        <div className='py-10 space-y-10'>
            {/* heading */}
            <div className='flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-5xl font-mono text-[#eb34ae]'>BUEATY TEMPLE</h1>
                <div className='bg-[#eb34ae] w-40 h-1 rounded-full' />
            </div>

            {/* body */}

            <div className="flex px-20 py-5 space-x-4">
                <div className='flex flex-col w-1/2 space-y-3'>
                    <h1 className='text-3xl text-[#eb34ae]'>DISCOVER LUXURY PAMPERING</h1>
                    <p>Our beautiful salon is the perfect spot to relax and unwind! Enjoy a drink in our Prosecco bar, treat yourself to a relaxing massage with our Royal Service, discover a new look at the Make up bar, or catch up with the girls as we pamper your nails.With our fabulous salon, the highest quality products and the Beauty Temple attention to detail, we guarantee you’ll leave us feeling like Royalty!</p>s
                </div>
                <div className='w-1/2'>
                    <img src='https://beautytemple.co.uk/wp-content/uploads/2019/02/Loughborough_649%C3%97481.jpg' alt="" className='rounded-sm' />
                </div>
            </div>
            <div className="flex px-20 py-5 space-x-4">
                <div className='w-1/2'>
                    <img src='https://beautytemple.co.uk/wp-content/uploads/2018/04/Image_1alt.jpg' alt="" className='rounded-sm' />
                </div>
                <div className='flex flex-col w-1/2 space-y-3'>
                    <h1 className='text-3xl text-[#eb34ae]'>ROYAL GATHERINGS</h1>
                    <p>Our beautiful salon is the perfect spot to relax and unwind! Enjoy a drink in our Prosecco bar, treat yourself to a relaxing massage with our Royal Service, discover a new look at the Make up bar, or catch up with the girls as we pamper your nails.With our fabulous salon, the highest quality products and the Beauty Temple attention to detail, we guarantee you’ll leave us feeling like Royalty!</p>s
                </div>
            </div>

        </div>
    )
}

export default Temple