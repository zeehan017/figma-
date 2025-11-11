const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user-info', (req, res) => {
    res.send("hello from your-name here!");
});

app.post("/api/data", (req, res) => {
    const requestData = req.body;
    res.status(200).json({message: "Data received successfully", data: requestData});
}); 

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
