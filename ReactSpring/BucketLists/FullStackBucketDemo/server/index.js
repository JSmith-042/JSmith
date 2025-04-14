const express = require("express")
const app = express();
const logger = require("morgan")

app.use(logger("dev"));

//what port
const port = process.env.PORT || 3000

//handler
app.get("/", (req, res) => {
    res.redirect("/home");
})

app.get("/home", (req, res)=>{res.send("<h1>Welcome home f</h1>")})


//parameters


//Listener
app.listen(port, ()=>{
    console.log(`bucketlist server running on port ${port}`)

})
