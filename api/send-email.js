import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullname, email, phone, company, message } = req.body;
        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.ZOHO_EMAIL,
                pass: process.env.ZOHO_PASSWORD
            }
        });

        const customerMailOptions = {
            from: `"Support Lumic" <${process.env.ZOHO_EMAIL}>`,
            to: `${email}`,
            subject: 'LUMIC - Terima Kasih Telah Menghubungi Kami',
            text: `
            Yth. ${fullname},

            Terima kasih telah menghubungi kami. Kami telah menerima pesan Anda dan tim kami akan segera menghubungi Anda. Kami menghargai kesabaran Anda.
    
            Hormat kami,
            Tim Lumic
            `
        }

        const supportMailOptions = {
            from: `"Support Lumic" <${process.env.ZOHO_EMAIL}>`,
            to: `${process.env.ZOHO_EMAIL}`,
            subject: 'New Contact Form Submission',
            text: `
                You have received a new message from the contact form :

                Full Name: ${fullname}
                Email: ${email}
                Phone: ${phone}
                Company: ${company}
                Message: ${message}
            `
        };

        try {
            await transporter.sendMail(customerMailOptions);
            await transporter.sendMail(supportMailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
