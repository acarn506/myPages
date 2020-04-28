import React from 'react'
import banner from "../images/reactbanner.jpeg"

const Home = (props) => {
    let reactBanner = <img src={banner} alt="React logo/banner" className="reactBanner"/>

    return (
        <main className='home'>
            <h1>Life on React</h1>
            {reactBanner}
            
            <div className="content">
                <h2>Directory</h2>
                <section>
                    <h3>About</h3>
                    <p>A brief overview of my life on react.</p>
                </section>
                <section>
                    <h3>Club Members</h3>
                    <p>Members along for the journey.</p>
                </section>
            </div>
            
        </main>
    )
}


export default Home