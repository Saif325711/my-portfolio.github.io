import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve paths correctly regardless of where script is run
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '.env');

console.log(`Loading .env from: ${envPath}`);
const result = dotenv.config({ path: envPath });

if (result.error) {
    console.error("Error loading .env file:", result.error);
}

console.log("Email User:", process.env.EMAIL_USER ? "Set" : "Not Set");
console.log("Email Pass:", process.env.EMAIL_PASS ? "Set" : "Not Set");

async function testEmail() {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ Credentials missing. Please check backend/.env file.");
        return;
    }

    if (process.env.EMAIL_USER.includes('your-email')) {
        console.error("❌ You haven't updated the placeholders in backend/.env!");
        console.error("Please add your real Gmail and App Password.");
        return;
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        console.log("Attempting to send test email...");
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            subject: "Test Email from Portfolio",
            text: "If you see this, your email configuration is working!"
        });
        console.log("✅ Email sent successfully!", info.messageId);
    } catch (error) {
        console.error("❌ Failed to send email:");
        console.error(error);
    }
}

testEmail();
