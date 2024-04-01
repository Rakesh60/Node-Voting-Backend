const express = require("express");
const connectToMongoDB=require('./Models/db')
const app = express();
const PORT = 5500;

//& Body Parser
app.use(express.json());
connectToMongoDB()

app.listen(PORT, () => {
  console.log(`Voting App Running at: http://localhost:${PORT}`);
});
