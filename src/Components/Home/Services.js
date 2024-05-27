import React from 'react'

function Services() {
    return (
        <div className='py-10 space-y-10'>
            {/* heading */}
            <div className='flex flex-col justify-center items-center space-y-4'>
                <h1 className='text-5xl font-mono text-[#eb34ae] uppercase'>Our Services</h1>
                <div className='bg-[#eb34ae] w-40 h-1 rounded-full' />
            </div>
            <div className='flex flex-col md:flex-row px-20 justify-between py-5 space-x-4'>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img class="rounded-t-lg" src="https://beautytemple.co.uk/wp-content/uploads/2021/01/Royal-1.jpg" alt="" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#eb34ae]">THE ROYAL SERVICE</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The Royal Service is all about making you feel special, adding a personal touch and creating the most relaxing, luxurious atmosphere for your treatments.  </p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#eb34ae] rounded-md hover:bg-[#c10a84]">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img class="rounded-t-lg" src="https://beautytemple.co.uk/wp-content/uploads/2020/12/Treatments2.jpg" alt="" />
                    <div class="p-5 ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#eb34ae]">PERFECT PAMPERING</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Choose a treatment from our extensive menu; from manicures & pedicures, massages and wraps to facials, we have everything you need to feel pampered from top to toe!</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#eb34ae] rounded-md hover:bg-[#c10a84]">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>




            <div class="grid-cols-1 sm:grid md:grid-cols-4  px-16 ">
                <div
                    class="mx-3 mt-6 flex flex-col self-start rounded-lg shadow-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <img
                        class="rounded-t-lg"
                        src="https://beautytemple.co.uk/wp-content/uploads/2020/11/Nail-Bar-2.jpg"
                        alt="Hollywood Sign on The Hill" />

                    <div class="p-5 px-3">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-[#eb34ae]">PROSECCO
                            NAIL BAR</h5>
                        <p class=" text-base">
                            Sip away at our nail bar, or sit back and soak-off at our pedicure stations, leaving you perfectly polished. The perfect spot for a catch up with a glass of bubbly, while we pamper your hands and feet.
                        </p>
                    </div>
                </div>

                <div
                    class="mx-3 mt-6 flex flex-col self-start rounded-lg shadow-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <img
                        class="rounded-t-lg"
                        src="https://beautytemple.co.uk/wp-content/uploads/2018/04/Image_5.jpg"
                        alt="Hollywood Sign on The Hill" />

                    <div class="p-5 px-3">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-[#eb34ae]">MAKE-UP
                            BAR</h5>
                        <p class=" text-base">
                            Revel in your glamorous side with Beauty Temple’s professional make-up applications to get you ready for the red carpet! Using only the finest products on the market, we’ll help you emphasise your natural beauty, and find your signature look.
                        </p>
                    </div>
                </div>

                <div
                    class="mx-3 mt-6 flex flex-col self-start rounded-lg shadow-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <img
                        class="rounded-t-lg"
                        src="https://beautytemple.co.uk/wp-content/uploads/2017/06/photo_022.jpg"
                        alt="Hollywood Sign on The Hill" />

                    <div class="p-5 px-3">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-[#eb34ae]">BRIDAL HAIR
                            & MAKEUP</h5>
                        <p class=" text-base">
                            Providing stunning hair and long-lasting make-up looks for the entire bridal party, we can help you create your perfect wedding day look. Whatever your style, our expert hair and make up artists are here to make your dream a reality for your big day.
                        </p>
                    </div>
                </div>

                <div
                    class="mx-3 mt-6 flex flex-col self-start rounded-lg shadow-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                    <img
                        class="rounded-t-lg"
                        src="https://beautytemple.co.uk/wp-content/uploads/2020/11/Nail-Bar-2.jpg"
                        alt="Hollywood Sign on The Hill" />

                    <div class="p-5 px-3">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-[#eb34ae]">PROSECCO
                            NAIL BAR</h5>
                        <p class=" text-base">
                            Sip away at our nail bar, or sit back and soak-off at our pedicure stations, leaving you perfectly polished. The perfect spot for a catch up with a glass of bubbly, while we pamper your hands and feet.
                        </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Services