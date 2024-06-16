let lastMessage = '';

export default (req, res) => {
    if (req.method === 'POST') {
        const { message, timestamp } = req.body;
        if (message && timestamp) {
            lastMessage = { message, timestamp };
            res.status(200).json({ status: `Message sent: ${message} at ${timestamp}` });
        } else {
            res.status(400).json({ status: 'No message or timestamp provided' });
        }
    } else if (req.method === 'GET') {
        res.status(200).json({ message: lastMessage });
    } else {
        res.status(405).json({ status: 'Method not allowed' });
    }
};
