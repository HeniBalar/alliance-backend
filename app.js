const express = require('express');
const dotenv = require("dotenv")
const cors = require('cors');
dotenv.config()
const bodyParser = require('body-parser');
const formRoutes = require('./controller/form');
const contactRoutes = require('./controller/contact');
const accountRoutes = require('./controller/account');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/form', formRoutes);
app.use('/contact', contactRoutes);
app.use('/account', accountRoutes);

app.get("/", (req, res) => {
    res.send('Alliance Backed')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
