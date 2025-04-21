import React, { useState, useContext } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
    width: 350px;
    margin: auto;
    background: linear-gradient(45deg,rgb(253, 63, 145),rgba(1, 234, 255, 0.9));
    padding: 25px;
    border-radius: 10px;
    box-shadow: 5px 2px 15px rgba(0, 0, 0, 0.1);
`;

const Image = styled('img')({
    width: '200px',
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)', // Hover effect for logo
    }
});

const Wrapper = styled(Box)`
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div, & > button, & > p {
        margin-top: 14.5px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background:rgb(219, 139, 0);
    color: white;
    height: 48px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    &:hover {
        background-color: #FF6347;  // Hover effect for login button
        transform: scale(1.05);
    }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: white;
    color:rgb(219, 139, 0);
    height: 48px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); // Hover effect for signup button
    }
`;

const Error = styled(Typography)`
    font-size: 12px;
    color: #ff6161;
    line-height: 1;
    margin-top: 10px;
    font-weight: 600;
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 14px;
`;

const loginInitialValues = {
    username: '',
    password: '',
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const BackgroundWrapper = styled(Box)`
  margin-top: -60px;
  padding: 0;
  height: 100vh;
 background-image: url('/starry-night.jpg'); /* Use imported image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: parallaxEffect 30s linear infinite;

  /* Parallax effect with multiple background layers */
  @keyframes parallaxEffect {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

// const BackgroundWrapper = styled(Box)`
//   margin-top: -60px;
//   padding: 0;
//   height: 100%;
//   background: linear-gradient(45deg, black,indigo, violet,white); 
//   background-size: 700% 700%;
//   animation: rainbowGradient 15s ease infinite;

//   @keyframes rainbowGradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;

const Login = ({ isUserAuthenticated }) => {
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, showError] = useState('');
    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! Please try again later.');
        }
    };

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            isUserAuthenticated(true);
            navigate('/');
        } else {
            showError('Something went wrong! Please try again later.');
        }
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    return (
       
        <BackgroundWrapper>
            <Component>
                <Box>
                    <Image src="/logo1.png" alt="blog" />
                    {account === 'login' ? (
                        <Wrapper>
                            <TextField
                                variant="standard"
                                value={login.username}
                                onChange={onValueChange}
                                name="username"
                                type="name"
                                label="Enter Username"
                                fullWidth
                            />
                            <TextField
                                variant="standard"
                                value={login.password}
                                onChange={onValueChange}
                                name="password"
                                type="password"
                                label="Enter Password"
                                fullWidth
                            />
                            {error && <Error>{error}</Error>}
                            <LoginButton variant="contained" onClick={loginUser}>
                                Login
                            </LoginButton>
                            <Text style={{ textAlign: 'center', color: 'black'  }}>OR</Text>
                            <SignupButton onClick={toggleSignup} style={{ marginBottom: 50 }}>
                                Create an Account
                            </SignupButton>
                        </Wrapper>
                    ) : (
                        <Wrapper>
                            <TextField
                                variant="standard"
                                onChange={onInputChange}
                                name="name"
                                type="name"
                                label="Enter Name"
                                fullWidth
                            />
                            <TextField
                                variant="standard"
                                onChange={onInputChange}
                                name="username"
                                type="name"
                                label="Enter Username"
                                fullWidth
                            />
                            <TextField
                                variant="standard"
                                onChange={onInputChange}
                                name="password"
                                type="password"
                                label="Enter Password"
                                fullWidth
                            />
                            {error && <Error>{error}</Error>}
                            <SignupButton onClick={signupUser}>Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={toggleSignup}>
                                Already have an account
                            </LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </BackgroundWrapper>

    );
};

export default Login;
