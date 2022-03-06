const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
const appRoute = require("./routes/welcome")
const productRoute = require("./routes/product")

// app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine", "ejs")
app.set("views", "views")

app.use('/app',appRoute)

app.use("/product", productRoute);

app.use((req,res)=>{

    res.render("404")

})


app.listen(3000)