const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json({"Deployment-Platform":"Vercel"})
})

app.listen(3000, () => console.log("server started on port 3000"))