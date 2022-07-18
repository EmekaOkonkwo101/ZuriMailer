const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const port = 5000;

dotenv.config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

let mailOptions = {
    from: "okonkwoemeka1000@gmail.com",
    to: "hycienth1000@gmail.com",
    subject: "ZuriMailer test",
    text: "Hi from your zurimailer project",
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("Error " + err);
    } else {
        console.log("Email sent successfully");
    }
});

app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
});