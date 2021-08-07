const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const name = "minutes-of-task-force-august-2-2021";

const pathToAttachment = path.join(__dirname, `${name}.pdf`);
console.log(pathToAttachment);

const attachment = fs.readFileSync(pathToAttachment).toString("base64");
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

