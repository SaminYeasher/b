import React, { useState, useEffect, useContext } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
    font-weight: bold;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 10px;
    border: 2px solid #ccc;
    transition: all 0.3s ease;

    &:focus {
        border-color: #3f51b5;
        background-color: #e8f0fe;
    }

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
    margin-top: 50px;
    font-size: 22px;
    padding: 12px;
    min-height: 150px;
    &:focus-visible {
        outline: none;
        border-color: #3f51b5;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const getImage = async () => { 
            if (file) {
                const data = new FormData();
                data.append("file", file);

                const response = await API.uploadFile(data); 

                if (response?.isSuccess && response.data?.imageUrl) {
                    setPost(prevState => ({
                        ...prevState,
                        picture: response.data.imageUrl,
                    }));
                } else {
                    console.error("File upload failed:", response);
                }
            }
        }

        getImage();
        setPost(prevState => ({
            ...prevState,
            categories: location.search?.split('=')[1] || 'All',
            username: account.username,
        }));
    }, [file, location.search, account.username]);

    const savePost = async () => {
        await API.createPost(post);
        navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField 
                    onChange={(e) => handleChange(e)} 
                    name='title' 
                    placeholder="What’s your story? Give it a captivating title!" 
                />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={6}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
                value={post.description}
            />
        </Container>
    );
};

export default CreatePost;
