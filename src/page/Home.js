import React from 'react'
import Header from '../Components/Home/Header'
import Menubar from '../Components/Home/Menubar'
import Banner from '../Components/Home/Banner'
import Temple from '../Components/Home/Temple'
import Services from '../Components/Home/Services'
import Footer from '../Components/Home/Footer'
import Appointement from '../Components/Home/Appointement'
import Offers from '../Components/Home/Offers'

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

            {/* services */}
            <Services />

            {/* booking */}
            <Appointement />

            {/* Offers */}
            <Offers />

            {/* footer */}
            <Footer />

        </div>
    )
}

export default HomePage