import { Box, styled, Typography, Link, Button } from '@mui/material'; 
import { GitHub, Email, LinkedIn,OpenInNew } from '@mui/icons-material';
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
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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

const IconLink = styled(Link)`
    color: inherit;
    margin: 0 10px;
    font-size: 2rem;
    &:hover {
        color: #3f51b5;
        transform: scale(1.1);
        transition: all 0.3s ease;
    }
`;

const BannerTextContainer = styled(Box)`
    background: rgba(18, 17, 17, 0.83);  // Add a semi-transparent black background
    padding: 20px;
    border-radius: 8px;
    animation: ${fadeIn} 2s ease-out;
`;

const Contact = () => {
    return (
        <Box>
            <Banner>
                <BannerTextContainer>
                    <Typography variant="h3" component="h3">Let’s Connect!</Typography>
                </BannerTextContainer>
            </Banner>
            <Wrapper>
                <Typography variant="h4" gutterBottom>Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    You can reach out to me on my social channels or send me an email. 
                    Let's collaborate and chat about exciting opportunities!
                </Text>
                <Box mt={4}>
                    <IconLink href="https://www.linkedin.com/in/md-samin-yeasher/" target="_blank">
                        <LinkedIn />
                    </IconLink>
                    <IconLink href="https://github.com/SaminYeasher" target="_blank">
                        <GitHub />
                    </IconLink>
                    <IconLink href="https://saminyeasher.github.io/saminyeasher1" target="_blank">
                        <OpenInNew />
                    </IconLink>
                    <IconLink href="mailto:samsismet01@gmail.com?Subject=This is a subject" target="_blank">
                        <Email />
                    </IconLink>
                </Box>
                <Box mt={5}>
                    <Button variant="contained" color="primary" size="large" href="mailto:codeforinterview@gmail.com?Subject=This is a subject">
                        Send me an Email
                    </Button>
                </Box>
            </Wrapper>
        </Box>
    );
};

export default Contact;
