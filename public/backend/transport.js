var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("./configuration");
const request = require("request");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

router.post("/send", (req, res, next) => {
  var name = req.body.name;

  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  var mail = {
    from: name,
    to: "RECEIVING_EMAIL_ADDRESS_GOES_HERE", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

module.exports = router;
