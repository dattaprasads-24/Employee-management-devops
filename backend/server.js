const express = require('express');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to Employee Management Portal!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        message: 'Employee Portal Backend is running'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
