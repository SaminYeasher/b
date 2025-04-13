import React, { useState, useEffect } from 'react';
import { Box, styled, TextareaAutosize, Button, FormControl, InputBase } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';

// === Styled Components ===
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

// === Initial State ===
const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
};

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Extracting post ID from the URL

    const [post, setPost] = useState(initialPost); // Post state
    const [file, setFile] = useState(''); // File state for uploading images

    // Default fallback image
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?...';

    // === Fetch post data when component mounts ===
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, [id]);

    // === Upload image whenever 'file' changes ===
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await API.uploadFile(data);
                if (response.isSuccess) {
                    // ✅ Properly update post state with new image URL
                    setPost(prevPost => ({
                        ...prevPost,
                        picture: response.data
                    }));
                }
            }
        };
        getImage();
    }, [file]);

    // === Handle form input changes (title, description) ===
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    // === Update post and navigate to details page ===
    const updateBlogPost = async () => {

        let response = await API.updatePost(post); // send updated post to backend
        if(response.isSuccess){
        navigate(`/details/${post._id}`); // go to details page
        }
    };

    return (
        <Container>
            {/* Display uploaded image or default image */}
            <Image src={`${post.picture || url}?t=${Date.now()}`} alt="post" />

            {/* Title Input and Upload Button */}
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
                    onChange={handleChange}
                    value={post.title}
                    name='title'
                    placeholder="Title"
                />
                <Button onClick={updateBlogPost} variant="contained" color="primary">
                    Update
                </Button>
            </StyledFormControl>

            {/* Description Input */}
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
