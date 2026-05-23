import nodemailer from "nodemailer";

if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
  throw new Error(
    "Missing email configuration. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables."
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default transporter;

// nodemailer
// tfei szzu yswi hpim