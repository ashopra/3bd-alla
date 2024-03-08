import express from 'express';
import cors from 'cors';
const port = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.post('/test', async (req, res) => {
    res.json(req)

})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
