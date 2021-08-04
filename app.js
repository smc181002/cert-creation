// Import dependencies
const fs = require("fs");
const moment = require("moment");
const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
require('dotenv').config()

// Create the PDF document
const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});

// The name
const name = "test"
const email = "meherchaitanya18802@gmail.com"

// Pipe the PDF into an name.pdf file
doc.pipe(fs.createWriteStream(`${name}.pdf`));

// Draw the certificate image
doc.image("images/certificate.png", 0, 0, { width: 842 });

// Remember to download the font
// Set the font to Dancing Script
doc.font("fonts/DancingScript-VariableFont_wght.ttf");

// Draw the name
doc.fontSize(60).text(name, 20, 265, { align: "center" });

// Draw the date
doc.fontSize(17).text(moment().format("MMMM Do YYYY"), -275, 430, {
    align: "center"
});

// Finalize the PDF and end the stream
doc.end();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

console.log(process.env.EMAIL);

const mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: "Congratulations on completing the course - FOLK LMS",
  text: `This mail is to congratulate ${name} for completing the course. Below is your certificate`,
  attachments: [
    {filename: `${name}.pdf`, path: `./${name}.pdf`}
  ]
}

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
