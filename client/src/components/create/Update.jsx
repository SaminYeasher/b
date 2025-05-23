import React, { useState, useEffect } from 'react';
import { Box, styled, TextareaAutosize, Button, FormControl, InputBase } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';

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
`;

const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date(),
};

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [post, setPost] = useState(initialPost); 
    const [file, setFile] = useState(''); 

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?...';

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await API.uploadFile(data);
                if (response.isSuccess) {
                    setPost(prevPost => ({
                        ...prevPost,
                        picture: response.data.imageUrl,
                    }));
                }
            }
        };
        getImage();
    }, [file]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const updateBlogPost = async () => {
        let response = await API.updatePost(post); 
        if(response.isSuccess){
            navigate(`/details/${post._id}`); 
        }
    };

    return (
        <Container>
            <Image src={`${post.picture || url}?t=${Date.now()}`} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="success" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField
                    onChange={handleChange}
                    value={post.title}
                    name='title'
                    placeholder="Title"
                />
                <Button onClick={updateBlogPost} variant="contained" color="primary">
                    Update
                </Button>
            </StyledFormControl>

            <StyledTextArea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={handleChange}
                value={post.description}
            />
        </Container>
    );
};

export default Update;
