const htmlContent = (name, courseName, date) => (
`<!DOCTYPE html>
<html>
  <head><link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" /> <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" />
    <style>
    * { box-sizing: border-box; }
    body { font-size: 14px; }
    .v165_2 { width: 842px; height: 595px; background: rgba(255,255,255,1); opacity: 1; position: absolute; top: 0px; left: 0px; overflow: hidden; }
    .v165_3 { width: 443px; color: rgba(55,68,78,1); position: absolute; top: 243px; left: 197px; font-family: Poppins; font-weight: Regular; font-size: 33px; opacity: 1; text-align: left; }
    .v165_4 { width: 543px; color: rgba(71,87,99,1); position: absolute; top: 320px; left: 147px; font-family: Work Sans; font-weight: Regular; font-size: 18px; opacity: 1; text-align: center; }
    .v165_5 { width: 55px; height: 273px; background: rgba(194,218,255,1); opacity: 1; position: absolute; top: 321px; left: 1px; overflow: hidden; }
    .v165_6 { width: 55px; height: 95px; background: rgba(194,218,255,1); opacity: 1; position: absolute; top: 1px; left: 731px; overflow: hidden; } .v165_7 { width: 55px; height: 204px; background: rgba(147,190,255,1); opacity: 1; position: absolute; top: 390px; left: 27px; overflow: hidden; }
    .v165_8 { width: 55px; height: 164px; background: rgba(147,190,255,1); opacity: 1; position: absolute; top: 1px; left: 759px; overflow: hidden; } .v165_9 { width: 55px; height: 123px; background: rgba(112,169,255,1); opacity: 1; position: absolute; top: 471px; left: 54px; overflow: hidden; }
    .v165_10 { width: 55px; height: 245px; background: rgba(112,169,255,1); opacity: 1; position: absolute; top: 1px; left: 786px; overflow: hidden; }
    .v165_11 { width: 208px; height: 208px; background: rgba(194,218,255,0.17000000178813934); opacity: 1; position: absolute; top: -66px; left: -79px; border-radius: 50%; }
    .v165_12 { width: 208px; height: 208px; background: rgba(194,218,255,0.17000000178813934); opacity: 1; position: absolute; top: 450px; left: 710px; border-radius: 50%; }
    </style>
    <title>Document</title>
  </head>
  <body><div class="v165_2"><span class="v165_3">Certificate of Completition</span>
      <span class="v165_4">This is to certify that ${name} successfully completed the ${courseName} on ${date}</span>
      <div class="v165_5"></div><div class="v165_6"></div><div class="v165_7"></div><div class="v165_8"></div><div class="v165_9"></div><div class="v165_10"></div><div class="v165_11"></div><div class="v165_12"></div>
    </div>
  </body>
</html>
  `
)

module.exports = htmlContent;
