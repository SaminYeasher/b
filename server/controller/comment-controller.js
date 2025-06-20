
import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        const commentData = {
            ...request.body,
            date: new Date() // Set the current timestamp explicitly
        };

        const comment = new Comment(commentData);
        await comment.save(); // Ensure the comment is saved properly

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
};


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
};


export const deleteComment = async (request, response) => {
    try {
        // Use findByIdAndDelete which will deleted the comment
        const comment = await Comment.findByIdAndDelete(request.params.id);

        // If no comment is found, return a 404 response
        if (!comment) {
            return response.status(404).json({ msg: 'Comment not found' });
        }

        console.log('Comment deleted:', comment); // Log deleted comment for confirmation

        response.status(200).json('Comment deleted successfully');
    } catch (error) {
        console.error('Error while deleting comment:', error);
        response.status(500).json({ msg: 'Failed to delete comment', error: error.message });
    }
};

