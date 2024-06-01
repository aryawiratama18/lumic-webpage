import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullname, email, phone, company, message } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtppro.zoho.com',
            port: 465,
            secure: true, 
            auth: {
                user: 'support@lumic.id',
                pass: 'iCrt&no2'
            }
        });

        const mailOptions = {
            from: '"Support Lumic" <support@lumic.id>',
            to: `${email}, support@lumic.id`,
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
