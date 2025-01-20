import dotenv from 'dotenv';
import express from 'express';
import twilio from 'twilio';
import nodemailer from 'nodemailer';

import __dirname from './utils/utils.js';

dotenv.config();

const app = express();

// >>>>>>>> send email
const transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get("/send/mail", async (req, res) => {
    try {
        const result = await transport.sendMail({
            from: "Edgar Stein <s.steinberg2019@gmail.com",
            to: "s.steinberg2019@gmail.com",
            subject: "Correo 2025",
            html: ` <div>
                    <h1> Esto es un test!</h1>
                    <p> Hola Mundo!</p>
                    <img src="cid:negro"/>
                    </div>`,
            attachments: [{
                filename: "negro.png",
                path: `${__dirname}/../images/negro.png`,
                cid: "negro"
            }]
        })
        res.send({ status: 'success', result });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ status: "error", message: "Error in send email!" })
    }
});



const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

console.log("TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
console.log("TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);


app.get('/send/sms', async (req, res) => {
    try {
        const result = await client.messages.create({
            body: 'Sos Programador Edgar: Lo vas a conseguir, segui asi, Te Amo!',
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+541165724140'
        });
        res.send({ status: 'success', result });
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ status: 'error', message: 'Error in send SMS!' });
    }
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server start in port http://localhost:${PORT}`);
})