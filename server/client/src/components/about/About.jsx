import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import aboutUS from './aboutUS.jpg';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Banner = styled(Box)`
    background-image: url(${aboutUS});
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    animation: ${fadeIn} 1.5s ease-out;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    text-align: center;
    animation: ${fadeIn} 2s ease-out;
`;

const Text = styled(Typography)`
    color: #878787;
    margin-top: 20px;
    font-size: 1.2rem;
    line-height: 1.6;
`;



const BannerTextContainer = styled(Box)`
    background: rgba(0, 0, 0, 0.5);  // Add a semi-transparent black background
    padding: 20px;
    border-radius: 8px;
    display: inline-block;
    animation: ${fadeIn} 2s ease-out;
`;

const MapContainer = styled(Box)`
    margin-top: 30px;
    text-align: center;
`;

const About = () => {
    return (
        <Box>
            <Banner>
                <BannerTextContainer>
                    <Typography variant="h3" component="h3">EDU_231_SPRING</Typography>
                </BannerTextContainer>
            </Banner>
            <Wrapper>
                <Typography variant="h4" gutterBottom>We are the team EDU_231_SPRING</Typography>
                <Text variant="h5">
                    We are working on a project for the Web Development course (CSE-242) instructed by Tanvir Azhar Sir, Lecturer of CSE Dept. SoSET.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/SaminYeasher" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have a chat? Reach out to me on 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/samin_yeasher1/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                    or send me an email at 
                    <Link href="mailto:samismet01@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
                <MapContainer>
                    <Typography variant="h5" gutterBottom>Our Location</Typography>
                    <iframe title='iframe'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.495850675686!2d91.80470027419541!3d22.372657240270897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd85f4dba6a6b%3A0x812e380dbc9fee53!2sEast%20Delta%20University!5e0!3m2!1sen!2sbd!4v1744823127172!5m2!1sen!2sbd"
                        width="100%" 
                        height="350" 
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </MapContainer>
            </Wrapper>
        </Box>
    );
};

export default About;
