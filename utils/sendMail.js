const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e614a3ed848e53",
        pass: "e77d579f44b9ae",
    },
});

module.exports = {
    sendMail: async function (to, url) {
        await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "reset password email",
            text: "click vao day de doi pass",
            html: "click vao <a href=" + url + ">day</a> de doi pass",
        })
    },
    sendPasswordMail: async function (to, username, password) {
        await transporter.sendMail({
            from: 'admin@haha.com',
            to: to,
            subject: "Thong tin tai khoan",
            text: "Username: " + username + " - Password: " + password,
            html: "<h3>Thong tin tai khoan cua ban</h3>"
                + "<p><b>Username:</b> " + username + "</p>"
                + "<p><b>Password:</b> " + password + "</p>"
                + "<p>Vui long doi mat khau sau khi dang nhap.</p>",
        })
    }
}
