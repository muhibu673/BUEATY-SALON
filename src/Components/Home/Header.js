import React from 'react'

function Header() {
    return (
        <div className='flex justify-between  bg-slate-950 h'>
            <div className='flex justify-start items-end text-white space-x-2 p-3'>
                <h4>This website uses cookies to ensure you get the best experience on our website.</h4>
                <a href="#" className='underline text-gray-300'>Learn More</a>
            </div>
            <div className='flex justify-center text-white'>
                <div className='px-6 flex items-center cursor-pointer'>Decline</div>
                <div className='px-6 flex items-center cursor-pointer bg-green-500'>Allow Cookies</div>
            </div>
        </div>
    )
}

export default Header