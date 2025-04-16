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
    color:rgb(0, 0, 0);
    line-height: 2;
    font-weight: bold;
    text-transform: uppercase;  /* Makes the heading more dramatic */
    letter-spacing: 2px;  /* Adds spacing between the letters */
    background: linear-gradient(45deg,rgb(248, 236, 78),rgb(243, 235, 0));
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(255, 204, 0, 0.7);  /* Adds depth to the text */
    animation: fadeIn 2s ease-in-out;
    
    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
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
