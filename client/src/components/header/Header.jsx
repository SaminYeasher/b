import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';


const Component = styled(AppBar)`
    background: linear-gradient(to right, #FF7F50,rgb(71, 145, 255)); 
    color: white;
    border-radius: 10px; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
`;

const Container = styled(Toolbar)`
    justify-content: center;
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    & > a {
        padding: 20px;
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.5s forwards;
        
        &:nth-child(1) {
            animation-delay: 0s;
        }
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.4s;
        }
        &:nth-child(4) {
            animation-delay: 0.6s;
        }

        &:hover {
            color:rgb(36, 34, 24); 
            transform: scale(1.1); 
        }
    }

    @media (max-width: 600px) {
        & > a {
            padding: 10px;
            font-size: 14px; 
        }
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const Header = () => {
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;
