//Note
/* 
 1- Turn off "Less secure apps" feature from the sender's email account
 2- Turn off 2FA from the sender's email account
 
*/
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
    }
});

let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'receiver-email@gmail.com',
    subject: 'Test',
    text: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
});
