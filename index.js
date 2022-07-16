const express = require('express');
const mongoose = require('mongoose');
const {LinkShortener} = require( './models');
const dotenv = require('dotenv').config();

const app = express();
const connection = async() =>{
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("terhubung ke database")
}
connection();
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
app.get('/:slug', async(req, res) => {
    try {
        const Link = await LinkShortener.findOne({slug:req.params.slug});
        if(!Link){
            res.status(404).send("Link Not Found");
        }
        else{
            res.redirect(Link.link);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
  })