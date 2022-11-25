const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req,res) => {
    res.json({"Deployment-Platform":"Vercel"})
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`server started on port ${port}`))