const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (_req, res) => {
    res.send({ message: 'Hej på dig' });
});

app.listen(PORT, () => {
    console.log(`Redo på http://localhost:${PORT}`);
});
