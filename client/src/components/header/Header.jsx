import { AppBar, Toolbar, styled, Box } from '@mui/material'; 
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Replace with your actual logo path

const Component = styled(AppBar)`
    background: linear-gradient(to right,rgb(253, 63, 145),rgba(1, 234, 255, 0.9)); 
    color: white; 
    box-shadow: 0px 4px 6px rgba(4, 4, 4, 0.1); 
`;

const Container = styled(Toolbar)`
    justify-content: center;
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    & > a {
        padding: 10px;
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

const LogoContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1; /* To align logo to the left */
`;

const Logo = styled('img')`
    height: 40px; /* Adjust the size of the logo as needed */
    margin-right: 20px;
`;

const Header = () => {
    return (
        <Component>
            <Container>
                <LogoContainer>
                    <Link to="/">
                        <Logo src={logo} alt="App Logo" />
                    </Link>
                </LogoContainer>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    );
}

export default Header;
