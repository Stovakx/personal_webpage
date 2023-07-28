const express = require('express');
const app = express();

app.use(express.json());
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
/* app.use(expressLayout) */
app.use(express.static('public'))
const port = process.env.PORT || 3000;
app.get('/', async (req, res)=>{
    try {
        res.render('index')
    } catch (error) {
        
    }
})

app.listen(port, () => {
    return console.log(`Listening on port ${port}`);
  });