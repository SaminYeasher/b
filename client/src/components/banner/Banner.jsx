import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #F8EC4E; /* A simple dark color for the text */
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px; /* A slight spacing between the letters for a modern feel */
    position: relative; /* Needed for the underline effect */
    z-index: 1;

    /* A simple underline animation that gives the text a smooth appearance */
    &:before {
        content: '';
        position: absolute;
        bottom: -5px; /* Position the underline slightly below the text */
        left: 0;
        width: 0;
        height: 2px;
        background-color: #F8EC4E; /* A subtle yellow color for the underline */
        animation: underlineAnimation 1s ease-in-out forwards;
    }

    @keyframes underlineAnimation {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

    /* Media Queries for Responsiveness */
    @media (max-width: 1200px) {
        font-size: 60px; /* Adjust font size for medium screens */
    }

    @media (max-width: 900px) {
        font-size: 50px; /* Adjust font size for smaller screens */
    }

    @media (max-width: 600px) {
        font-size: 40px; /* Further adjust font size for very small screens */
    }

    @media (max-width: 400px) {
        font-size: 30px; /* Set smaller font size for very small devices */
    }
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    font-weight: 600;
    color: #333;
    font-style: italic;
`;

const Banner = () => {
    return (
        <Image>
            <Heading>STORYFLOW BLOG</Heading>
            <SubHeading>EDU_231_SPRING</SubHeading>
        </Image>
    );
};

export default Banner;
