// create a get, put, post, patch and delete request
const express = require("express")

const app = express()

const PORT = 3000

app.get("/kdamzy", (req, res) => {
    res.send("Hello Kenny")
})

app.put("/kenny", (req, res) => {
    res.send("Hello Presh")
})

app.patch("/kenny", (req, res) => {
    res.send("Hello Dammy")
})

app.post("/kenny", (req, res) => {
    res.send("Hello Ola")
})

app.delete("/kenny", (req, res) => {
    res.send("Hello Lare")
})

// creat an anonymous function
app.listen(PORT,function(){
    console.log("my App is working fine")
})
