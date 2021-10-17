import React from 'react';
import {Link} from  'react-router-dom';


function Footer() {
    return(
        <div className="footer">
            <div className="content-container">
                
                 <img  className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="BESFLIX"/>
            <div className="fot-links">
                <ul>
                   
                    <li className="fot-items"><Link to={{pathname: "https://www.netflix.com"}}>Go to Netflix</Link></li>
                    <li className="fot-items"><Link to={{pathname: "https://www.netflix.com/youraccount"}}>Account</Link></li>
                    <li className="fot-items"><Link to={{pathname: "https://help.netflix.com/contactus"}}>Contact Us</Link></li>
                </ul>
            </div>

            </div>
        </div>
    )
}

export default Footer;