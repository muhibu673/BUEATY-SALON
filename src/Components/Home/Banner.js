import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (
        <div className='relative h-[80vh]'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                <div className='flex flex-col items-center space-y-2'>
                    <h1 className='text-6xl font-bold text-[#eb34ae] font-mono text-center'>WELCOME TO PINK RUFFLES BUEATY</h1>
                    <h4 className='text-3xl font-semibold text-[#eb34ae] font-mono'>THE ROYAL SERVICE</h4>
                    <p className='text-[#eb34ae] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet temporibus eligendi accusamus quis doloremque iure non hic optio deleniti! Quos non at id harum distinctio, deleniti inventore velit odio veritatis!</p>
                    <div className='flex space-x-6 pt-5'>
                        <button className='bg-transparent border rounded-sm text-[#eb34ae] hover:text-white p-4 px-8 hover:bg-[#eb34ae]  hover:shadow-sm'>TAKE A LOOK</button>
                        <button className='bg-transparent border rounded-sm text-[#eb34ae] hover:text-white p-4 px-8 hover:bg-[#eb34ae] hover:shadow-sm'>GIFT VOUCHERS</button>
                    </div>
                </div>
            </div>
            <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                <div>
                    <img className='h-[80vh]' src="https://thumbs.dreamstime.com/b/woman-facial-mask-beauty-salon-22945999.jpg" alt='' />
                </div>
                <div>
                    <img className='h-[80vh]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc9JX9TP47ppvTucjKVUUz-iyO_TQrfgendZc2Uw8PZcgmbU39yYcEdRlE7rvO_5F8iY&usqp=CAU" alt='' />
                </div>
                <div>
                    <img className='h-[80vh]' src="https://st3.depositphotos.com/12039412/16353/i/450/depositphotos_163531582-stock-photo-woman-in-beauty-salon-getting.jpg" alt='' />
                </div>
            </Carousel>
        </div>


    )
}

export default Banner