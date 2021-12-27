const nodemailer = require('nodemailer')

// class MailService () {

// }

// const { to, cc, bcc, subject, message, attachment, smtpDetails } = req.body;

// if (!to || !subject || !message || !smtpDetails) return res.status(400).send('input cannot be empty')


const CONFIG_MAILER = Object.freeze({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    sender: process.env.SMTP_USER
})

exports.send = async (to, link) => {
    const transporter = nodemailer.createTransport(CONFIG_MAILER)
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Activation account from' + ' ' + process.env.CLIENT_URL,
        text: 'Ваше письмо с активацией. Перейдите по ссылке! Спасибо.',
        html:
            `
            <div>${link}</div>
            `
    })

    transporter.close()
}


