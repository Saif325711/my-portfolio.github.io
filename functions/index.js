const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");

// Contact form endpoint
exports.contact = onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
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
            replyTo: email,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`Contact email from ${name} (${email})`);
            res.status(200).json({ message: "Message sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: `Failed to send: ${error.message}` });
        }
    });
});
