import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  try {
    // Create a transporter with your SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'crazydomain',
      port: 465,
      secure: true, // Set to false if your SMTP server doesn't require SSL
      auth: {
        user: 'sales@kennykitchen.com.au',
        pass: 'phanduykhanh1986',
      },
    });

    // Compose the email
    const mailOptions = {
      from: email,
      to: 'sales@kennykitchen.com.au',
      subject: 'New contact form submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send a notification email to your email address
    const notificationOptions = {
      from: 'sales@kennykitchen.com.au',
      to: 'td.duc89@gmail.com',
      subject: 'New contact form submission notification',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(notificationOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while sending the email' });
  }
}
