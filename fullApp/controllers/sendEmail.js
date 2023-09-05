// const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const {
      email: clientEmail,
      message,
      subject: subjectFromClient,
      name,
    } = req.body;

    const textToClient = `Dear ${name},

    I have already received email with the following content and will get back to you shortly.

    ${message}

    Thank you for your time. If you have more questions, please reply to this email directly.

    Kind regards,
    Wei Ling

    `;

    const info = await sgMail.send({
      from: "weiling.chen.dev@gmail.com",
      to: [clientEmail, "weiling.chen.dev@gmail.com"],
      subject: "Email received - Wei Ling CHEN",
      text: textToClient,
    });

    //   const transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     auth: {
    //       user: "barton.schimmel7@ethereal.email",
    //       pass: "XXwgStF9ASQYjMVXHG",
    //     },
    //   });

    // const info = await transporter.sendMail({
    //   from: "weiling.chen.dev@gmail.com",
    //   to: clientEmail,
    //   subject: "Email received - Wei Ling CHEN",
    //   text: textToClient,
    // });

    // const info2 = await transporter.sendMail({
    //   from: clientEmail,
    //   to: "weiling.chen.dev@gmail.com", // list of receivers
    //   subject: subjectFromClient, // Subject line
    //   text: message, // plain text body
    // });
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = sendEmail;
