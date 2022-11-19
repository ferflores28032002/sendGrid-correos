import express from 'express'
import { sendGrid } from '../services/sendGrid.js';
const router = express.Router()



router.post("/email/sendgrid", async (req, res) => {

    const { to, subject, text, html } = req.body;

    const msg = {
        to,
        from: "fernandojose28032002@gmail.com",
        subject,
        text,
        html
    }

    try {
        await sendGrid.send(msg)
    } catch (error) {
        res.json({
            message: error.message
        })
    }


    res.status(201).json("Enviado")



} )




export default router;