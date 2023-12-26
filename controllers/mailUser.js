import nodemailer from 'nodemailer'
import dotenv from "dotenv";

export const emailUser = async (req, res) => {
    dotenv.config();
    try {
    
        const email = req.params.email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            logger:true,
            debug:true,
            secureConnection:false,
            auth: {
                user: process.env.Gmail_Account,
                pass: process.env.Gmail_Password,
            },
            tls:{
                rejectUnauthorized:true
            }            
        });
        

        const mailOptions = {
            from: process.env.Gmail_Account,
            to: email,
            subject: 'Order Confirmed',
            text: `Thank you for your generous Order,\n\n\n\nBest regards,\n Azeem Tourism`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'An error occurred while sending the email.' });
            }
            console.log('Email sent:', info.response);
            return res.status(200).json({ message: 'Email sent successfully.' });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};


