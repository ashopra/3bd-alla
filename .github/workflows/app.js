
import express from 'express';
import cors from 'cors';
const app = express();

// Enable CORS for all origins
app.use(cors());

// Your other routes and middleware
app.get('/api/data',(req, res) =>{
  res.json({message:'your api response'});
});
  
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
