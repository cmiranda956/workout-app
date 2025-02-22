import express from 'express';
import cors from 'cors';

const PORT = 8080;

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send("We're in the express app!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
