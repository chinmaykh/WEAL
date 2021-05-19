// SCSCSCSCSCSCSCSCSCSCSCSSCSCSCSCSCSC
const express = require('express')
const app = express();

// Middleware Body Parser
app.use(express.json());


// Routes

// Base
app.get('/',(req,res)=>{
    res.send("<h1>Project WEAL (C)</h1>")
})

app.get('/data',(req,res)=>{
    console.log(req.query);
    res.send('Got it!')
})

// Listener
app.listen(5050 || process.env.PORT,()=>{
    console.log('Server started on PORT: 5050');
})