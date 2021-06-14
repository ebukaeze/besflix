import React, { useEffect, useState } from 'react';



function Nav() {
    const [show, handleShow ] = useState(false);

    useEffect(()=>{
window.addEventListener( "scroll", () => {
   if(window.scrollY > 100 ){
       handleShow(true);
   } else handleShow(false);
});
return () => {
    window.removeEventListener("scroll");
};
}, []);
    return(
        <div className={`nav ${ show && "scroll__bg"}`}>
            <img  className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="BESFLIX"/>
            <img className="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEds1LHIOdzDU1uUzfJTN0n03YEp8Bp4YGA&usqp=CAU" alt="AVATAR"/>
        </div>
    )
}
export default Nav;