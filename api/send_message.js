export default (req, res) => {
    const { message } = req.body;
    if (message) {
        res.status(200).json({ status: `Message sent: ${message}` });
    } else {
        res.status(400).json({ status: 'No message provided' });
    }
};
