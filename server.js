if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  };
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  try {
    // Read the 'index.html' file synchronously
    const data = fs.readFileSync('./index.html', 'utf8');
    // Send the 'index.html' content as the response
    res.send(data);
  } catch (error) {
    console.error('Error reading or sending file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/sendmail', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SENDER_HOST,
    port: 587,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PW
    }
  });
  
  // Verify connection configuration
  transporter.verify(function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // Parse the form data
  const form = new multiparty.Form();
  form.parse(req, (err, fields) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(400).json({ message: 'Bad Request' });
    }

    const data = {};
    Object.keys(fields).forEach((property) => {
      data[property] = fields[property].toString();
    });

    // Construct email content
    const mail = {
      from: data.email,
      to: process.env.EMAIL_RECEIVER,
      subject: 'Email ze soukromných stránek',
      text: `${data.firstName} ${data.lastName}
                \n ${data.telephone} 
                \n ${data.message}`,
    };

    console.log(mail);

    // Send the email
    transporter.sendMail(mail, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      console.log('Email byl odeslán');
      res.redirect('/');
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
