const nodemailer = require("nodemailer");

const sendAlert = async (ip, attempts) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ALERT_EMAIL,
    subject: "Alert: Multiple Failed Requests",
    text: `IP Address ${ip} has made ${attempts} failed attempts within the time window.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Alert email sent");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendAlert;
