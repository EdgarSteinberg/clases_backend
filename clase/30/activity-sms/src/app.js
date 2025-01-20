import 'dotenv/config';
import express from 'express';
import twilio from 'twilio';

const app = express();

app.use(express.urlencoded({ extended: true }));

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.get('/send/sms', async (req, res) => {
    try {
        const { name, product } = req.query;

        if (!name || !product) return res.status(400).send({ status: 'error', message: 'Error in send SMS!' });

        const result = await client.messages.create({
            body: `Esto es un msj de ${name} y tu product es ${product} gracias vuelva pronto`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+541165724140'
        });
        res.send({
            status: 'success',
            result
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: 'error',
            message: 'Error in send SMS!'
        });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in htpp://localhost:${PORT}`)
})