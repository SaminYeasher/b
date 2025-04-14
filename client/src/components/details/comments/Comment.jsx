import { useContext } from "react";
import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';  // Import the function for "time ago"

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
    margin-top: 25px;
    background:rgba(88, 254, 135, 0.49);
    padding: 15px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 2px;
`;

const Name = styled(Typography)`
    font-weight: 800;
    font-size: 20px;
    margin-right: 5px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
    margin: 5px;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {
    const { account } = useContext(DataContext);

    const removeComment = async () => {
        try {
            let response = await API.deleteComment(comment._id);
            console.log('Delete response:', response);  // Log to see the response
    
            if (response.isSuccess) {
                setToggle(prevState => !prevState);  // Trigger re-render to reflect deleted comment
            } else {
                console.log('Error deleting comment');
            }
        } catch (error) {
            console.error('Error deleting comment:', error);  // Log any errors
        }
    };

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>
                    {/* Use formatDistanceToNow to display "time ago" format */}
                    {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
                </StyledDate>
                { comment.name === account.username && <DeleteIcon onClick={() => removeComment()} /> }
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;
