const sgMail = require('@sendgrid/mail');
const pdf = require('html-pdf');
require('dotenv').config();

exports.certAutomate = () => {
  const [name, courseName, date, email] = [
    "Meher Chaitanya", 
    "Meditation 101", 
    new Date(Date.now()).toLocaleDateString(), 
    "linuxusr69@gmail.com"
  ]

  const options = {
    height: 613,
    width: 842,
  }

  const html = `
  <!DOCTYPE html>
  <html>
    <head> <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" /> <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" /> <title>Document</title>
    <style>
      * { box-sizing: border-box; }
      body { overflow: hidden !important; font-size: 14px; }
      .v117_2 { width: 100%; height: 1020px; background: rgba(255,255,255,1); opacity: 1; position: absolute; top: 0px; left: 0px; overflow: hidden; }
      .v118_4 { width: 758px; color: rgba(55,68,78,1); position: absolute; top: 415px; left: 343px; font-family: Poppins; font-weight: Regular; font-size: 57px; opacity: 1; text-align: left; }
      .v118_5 { width: 929px; color: rgba(71,87,99,1); position: absolute; top: 547px; left: 258px; font-family: Work Sans; font-weight: Regular; font-size: 30px; opacity: 1; text-align: center; }
      .v118_6 { width: 94px; height: 468px; background: rgba(194,218,255,1); opacity: 1; position: absolute; top: 552px; left: 0px; overflow: hidden; }
      .v118_9 { width: 94px; height: 162px; background: rgba(194,218,255,1); opacity: 1; position: absolute; top: 0px; left: 1255px; overflow: hidden; }
      .v118_7 { width: 94px; height: 349px; background: rgba(147,190,255,1); opacity: 1; position: absolute; top: 670px; left: 49px; overflow: hidden; } 
      .v118_10 { width: 94px; height: 281px; background: rgba(147,190,255,1); opacity: 1; position: absolute; top: 0px; left: 1303px; overflow: hidden; }
      .v118_8 { width: 94px; height: 210px; background: rgba(112,169,255,1); opacity: 1; position: absolute; top: 809px; left: 95px; overflow: hidden; }
      .v118_11 { width: 94px; height: 420px; background: rgba(112,169,255,1); opacity: 1; position: absolute; top: 0px; left: 1349px; overflow: hidden; }
      .v118_12 { width: 356px; height: 356px; background: rgba(194,218,255,0.17000000178813934); opacity: 1; position: absolute; top: -114px; left: -130px; border-radius: 50%; }
      .v118_13 { width: 356px; height: 356px; background: rgba(194,218,255,0.17000000178813934); opacity: 1; position: absolute; top: 771px; left: 1219px; border-radius: 50%; }
    </style>
    </head>
    <body> <div class="v117_2"><span class="v118_4">Certificate of Completition</span>
    <span class="v118_5">This is to certify that ${name} successfully completed the ${courseName} on ${date}</span>
    <div class="v118_6"></div><div class="v118_9"></div><div class="v118_7"></div><div class="v118_10"></div><div class="v118_8"></div><div class="v118_11"></div><div class="v118_12"></div><div class="v118_13"></div></div> </body>
  </html>
  `

  pdf.create(html, options).toBuffer(async (err, buffer) => {
    if (err) return console.log(err);

    console.log(buffer);
    const attachment = buffer.toString("base64");
    console.log(attachment);

    sgMail.setApiKey(process.env.API_KEY);

    const message = {
      to: email,
      from: {
        email: "meherchaitanya18802@gmail.com",
        name: "Meher Chaitanya from FOLK LMS"
      },
      templateId: "d-251ff38bb389401aab68db3b98990a26",
      dynamicTemplateData: {
        name: name,
        course: courseName,
      },
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

  })
}
