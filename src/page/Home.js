import React from 'react'
import Header from '../Components/Home/Header'
import Menubar from '../Components/Home/Menubar'
import Banner from '../Components/Home/Banner'
import Temple from '../Components/Home/Temple'

function HomePage() {
    return (
        <div className='flex flex-col'>
            {/* header */}
            <Header />
            {/* menu bar */}
            <Menubar />
            {/* banner */}
            <Banner />

            {/* temple */}
            <Temple />
        </div>
    )
}

export default HomePage