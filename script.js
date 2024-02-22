/*import info from "./info.json" assert {type: "json"};
const a = document.querySelector(".btn");
a.onclick = function (){
alert(info[1]);
}*/
//const express = require('express');
//const cors = require('cors');
import express from 'express';
import cors from 'cors';
const app = express();

// Enable CORS for all origins
app.use(cors());

// Your other routes and middleware

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
