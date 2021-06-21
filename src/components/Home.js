import React from 'react';
import image from "../back.jpg";
import Logo from "./Logo";
import Particles from 'react-particles-js';

const partcleOptions = {
    particles: {
        number: {
            value: 60,
        density:{
            enable:true,
            value_area: 500
        }
      }
    }
}    
function Home (){
    return (
        <main className="container2">
            <Particles className="particles"
             params={partcleOptions} />
            <Logo />
              {/*<img src={image} alt="monster" className="absolute object-cover w-full h-full"/>*/}
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64">
                <h1 className="flex-item2">Hello I am Nirmalie and I am a Full Stack Web Developer.</h1>
            </section>
        </main>
    )
}
export default Home;