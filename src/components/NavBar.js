import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar (){
    return (
       <header className=" color2">
           <div className="container mx-auto flex justify-between">
               <nav className="flex">
                   <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4 text-red-100"> 
                       Home                 
                   </NavLink>
                   <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100"> 
                       About                 
                   </NavLink>
                   <NavLink to="/projects" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100"> 
                       Projects                 
                   </NavLink>
                   <NavLink to="/resume" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100"> 
                       Resume                 
                   </NavLink>
               </nav>
           </div>
       </header>
    )
}
export default NavBar;