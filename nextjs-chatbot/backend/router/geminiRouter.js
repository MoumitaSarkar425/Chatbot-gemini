const express = require('express');
const router = express.Router();
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

router.post('/text-reply',async(req,res)=>{
    try {
        const prompt = req.body.question;
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        res.send(text)
    } catch (error) {
        res.send('...')
    }
    
})

module.exports = router