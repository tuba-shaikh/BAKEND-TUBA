const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req, res) => {
    res.send("Hello,Backend is Working!");
});

app.get("/test",(req,res) =>{
    res.send("Auto deploy CI/CD");
});
app.listen(PORT, () => {
    console.log("Server running on port" + PORT)
});