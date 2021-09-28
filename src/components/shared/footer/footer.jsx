import React from 'react';
import './footer.scss'

const Footer = () => {
    return (

        <footer className="footer">
           <p> &copy; {new Date().getFullYear()} 
              Copyright: 
             <a href="https://maximiliano-mendez.surge.sh" target="_blank">MaximiliaN</a>
           </p>
        </footer>
        
    )
}

export default Footer