import nodemailer from 'nodemailer'

export const POST = async (req: Request) => {
  const { name, email, projectType, budget, messages } = await req.json()

  // Configure your Hostinger SMTP details here
  const transporter = nodemailer.createTransport({
    host: process.env.FE_SMTP_HOST, // Change this if different
    secure: true,
    tls: {
      ciphers: 'SSLv3',
    },
    requireTLS: true,
    port: 465,
    debug: true,
    connectionTimeout: 10000,
    auth: {
      user: process.env.FE_SMTP_USER,
      pass: process.env.FE_SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `web@foundasi.com`, // Sender's name and email
      to: 'hi@foundasi.com', // Target email
      subject: 'New Project Planner Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${messages}`,
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Project Type:</strong> ${projectType}</p>
               <p><strong>Budget:</strong> ${budget}</p>
               <p><strong>Additional Details:</strong> ${messages}</p>`,
    })

    return Response.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json({ message: 'Failed to send email' })
  }
}
