let lastMessage = '';

export default (req, res) => {
    if (req.method === 'POST') {
        const { message } = req.body;
        if (message) {
            lastMessage = message;
            res.status(200).json({ status: `Message sent: ${message}` });
        } else {
            res.status(400).json({ status: 'No message provided' });
        }
    } else if (req.method === 'GET') {
        res.status(200).json({ message: lastMessage });
    } else {
        res.status(405).json({ status: 'Method not allowed' });
    }
};
