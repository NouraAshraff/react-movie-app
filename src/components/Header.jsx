
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

<div style={{backgroundColor:"gray" ,display:"flex",justifyContent:"space-around",padding:20}}>
            <Link to="/">Home</Link>
           
            <Link to="/about">About</Link>
            <Link to="/movies/add">Add Movie</Link>
            <Link to="/contact">Contact Us</Link>

        </div>

        </>
    );
}

export default Header;