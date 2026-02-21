import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { projects } from './projectsData.js';

import path from 'path';
import { fileURLToPath } from 'url';

// Resolve paths correctly regardless of where script is run
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '.env');

dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/reply', async (req, res) => {
    const { to, subject, text, originalMessage } = req.body;

    console.log(`Attempting to send email to: ${to}`);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing email credentials in .env");
        return res.status(500).json({ error: "Server configuration error: Missing email credentials." });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: `Re: ${subject || 'Inquiry'}`,
        text: `${text}\n\n--- Original Message ---\n${originalMessage}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully to ${to}`);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: `Failed to send email: ${error.message}` });
    }
});

// Contact form - sends message to your personal email
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing email credentials in .env");
        return res.status(500).json({ error: "Server configuration error." });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${name}`,
        html: `
            <h2>New Contact Form Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p style="color:#888;">Sent from your portfolio contact form</p>
        `,
        replyTo: email
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Contact email received from ${name} (${email})`);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending contact email:', error);
        res.status(500).json({ error: `Failed to send message: ${error.message}` });
    }
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
