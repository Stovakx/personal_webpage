const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  try {
    // Read the 'index.html' file synchronously
    const data = fs.readFileSync('./views/index.html', 'utf8');
    
    // Send the 'index.html' content as the response
    res.send(data);
  } catch (error) {
    console.error('Error reading or sending file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
