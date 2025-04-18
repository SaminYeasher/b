const url = 'http://localhost:8000';

export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(404).json("File not found");
    }
    const imageUrl = `${url}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
};
