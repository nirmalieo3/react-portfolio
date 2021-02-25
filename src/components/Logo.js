import React from 'react';
import Tilt from 'react-tilt';
import profile from './profile.jpg'
function Logo (){
    return (
        <div >
            <Tilt className="Tilt style1" options={{ max : 55}} style={{height: 500, width:400}}>
        <div className="Tilt-inner container"><img class="flex-item" src={profile}/></div>
        </Tilt>
        </div>
       
    )
}
export default Logo;

