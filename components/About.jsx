import React from 'react'
import codeWithCart from '../images/cartsnapshot.jpeg'

const About = (props) => {
    //let reactBanner = <img src={banner} alt="React logo/banner" className="reactBanner"/>
    let code = <img src={codeWithCart} alt="Code snippet from a shopping cart app" className="codeCart"/>

    return (
        <main className='home'>
            <h1>About</h1>
            
            <div className="aboutContent">
                <section>
                    <h2>It all started with a simple project</h2>
                    {code}
                    <p>My first React app was building a list of shopping items that 
                    could be added to a cart and had the functionality to be incremented or decremented.
                    Tested the constructor and componentDidMount methods to check timing.  
                    </p>
                </section>
                <section>
                    <h2></h2>
                    <p></p>
                </section>
            </div>
            
        </main>
    )
}


export default About