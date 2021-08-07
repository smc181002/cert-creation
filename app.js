// Import dependencies
const fs = require("fs");
const path = require("path");
const moment = require("moment");
const PDFDocument = require("pdfkit");
const sgMail = require("@sendgrid/mail");
require('dotenv').config()

// Create the PDF document
const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
});

// The name
const name = "smc181002"
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

// sendgrid mail

pathToAttachment = path.join(__dirname, `${name}.pdf`);
console.log(pathToAttachment);

attachment = fs.readFileSync(pathToAttachment).toString("base64");
console.log(attachment)

sgMail.setApiKey(process.env.API_KEY);

const message = {
  to: "linuxusr69@gmail.com",
  from: {
    email: "meherchaitanya18802@gmail.com",
    name: "Meher Chaitanya"
  },
  subject: "Hello there",
  text: 'and easy to do anywhere, even with Node.js',
  // templateId: "d-251ff38bb389401aab68db3b98990a26",
  // dynamicTemplateData: {
    // name: name,
    // course: "Meditation",
  // },
  attachments: [
    {
      content: attachment,
      filename: `${name}.pdf`,
      type: "application/pdf",
      disposition: "attachment"
    }
  ]
};

sgMail.send(message);

