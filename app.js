const sgMail = require('@sendgrid/mail');
const pdf = require('html-pdf');
const htmlContent = require('./htmlContent')
require('dotenv').config();

exports.certAutomate = (req, res) => {
// const certAutomate = (req, res) => {
  const {name, courseName, email} = req.body; // destructure the body object
  const date = new Date(Date.now()).toLocaleDateString(); // get date at that moment

  // options can either have height and width or predefined formats
  const options = {
    // height: 595, // allowed units: mm, cm, in, px 
    // width: 842, // allowed units: mm, cm, in, px
    // (default value as number is px) (eg: "10in", "124mm")
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid 
    orientation: "landscape", // portrait or landscape
  } // more info for above options: https://www.npmjs.com/package/html-pdf?activeTab=readme

  const sendMail = async (err, buffer) => {
    if (err) return console.log(err);

    const attachment = buffer.toString("base64");

    // api key from the environment
    sgMail.setApiKey(process.env.API_KEY);

    // message config options. 
    const message = {
      to: email,
      // from email address and the name of the sender
      from: {
        email: "meherchaitanya18802@gmail.com",
        name: "Meher Chaitanya from FOLK LMS"
      },
      // template id from the sendgrid console
      templateId: "d-251ff38bb389401aab68db3b98990a26", 
      // data to be passed to create dynamic template
      dynamicTemplateData: {
        name: name,
        course: courseName,
      },
      // one or more attachments with content in base64 format
      attachments: [
        {
          content: attachment,
          filename: `${name}.pdf`,
          type: "application/pdf",
          disposition: "attachment"
        }
      ]
    };

    console.log("sending mail...");
    await sgMail.send(message);

    console.log("Mail Sent!!");
    // send the output to the cloud function endpoint
    res.send(`Mail sent to ${email}!`);
  }

  // get html content in template string from htmlContent.js file
  const html = htmlContent(name, courseName, date);

  // create the pdf and run the callback func 
  // that consists of mail sending logic
  pdf.create(html, options).toBuffer(sendMail);
}

// certAutomate({body: {name: "smc-test", courseName: "hello", email: "meherinfinity@gmail.com"}})
