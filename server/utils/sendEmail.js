const { MailerSend } = require("mailersend");

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

async function sendEmail(to, subject, text, html) {
  try {
    const emailData = {
      from: {
        email: process.env.MAILERSEND_FROM_EMAIL,
        name: process.env.MAILERSEND_FROM_NAME,
      },
      to: [{ email: to }],
      subject,
      text,
      html,
    };

    const response = await mailersend.email.send(emailData);
    console.log("📧 Email sent:", response);
    return response;
  } catch (err) {
    console.error("❌ Sending email failed:", err.response?.body || err);
    throw err;
  }
}

module.exports = sendEmail;
