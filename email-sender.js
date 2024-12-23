const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", 
    pass: "your-password",       
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com",
  subject: "Hello from Node.js",
  text: "This is a test email sent using Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Email sent: " + info.response);
  }
})