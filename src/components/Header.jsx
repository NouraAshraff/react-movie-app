
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
function Header() {
    const navigate = useNavigate();
    const counter = useSelector((state) => state.counter.counter)

    const handleMoveToFav = () => {
        navigate('/favourits')
    }
    const style = {
        position: 'absolute',
        top: '0px',
        right: '0px',
        fontSize: '18px'

    }

    return (
        <>


            <Navbar fixed="top" bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/movies/add">Add Movie</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/favourits">Favourits</Nav.Link>
                        <div className='position-relative'>
                            <IconButton onClick={handleMoveToFav} aria-label="add to favorites">
                                < FavoriteIcon sx={{ color: red[500] }} />
                                {counter > 0 && (
                                    <span style={style} className='text-secondary'>
                                        {counter}
                                    </span>
                                )}                      
                            </IconButton>

                        </div>
                    </Nav>

                </Container>
            </Navbar>
            <br />



        </>
    );
}



export default Header;

