import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullname, email, phone, company, message } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_PASSWORD
            }
        });

        const mailOptions = {
            from: `"Support Lumic" <${process.env.ZOHO_EMAIL}>`,
            to: `${email}, ${process.env.ZOHO_EMAIL}`,
            subject: 'Form Submission',
            text: `
                Full Name: ${fullname}
                Email: ${email}
                Phone: ${phone}
                Company: ${company}
                Message: ${message}
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
