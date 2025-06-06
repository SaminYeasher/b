
import { styled, Box, Typography } from '@mui/material';


const Container = styled(Box)`
    border: 1px  solid rgb(68, 41, 41);
    border-radius: 8px;
    margin: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 300px;
    width: 250px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: '150px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)', // Hover effect for img
    },
});

const Text = styled(Typography)`
    color: #878787
    font-size: 20px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 12px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title,30)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 30)}</Details>
        </Container>
    )
}

export default Post;