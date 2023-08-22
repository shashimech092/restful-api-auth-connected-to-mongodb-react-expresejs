const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');
const cors = require('cors');

const app = express();


// app.use(express.static('./public'))     or
// app.use(express.static(__dirname+'/public'))

// to connect two networks react and express
app.use(cors());


const port = process.env.PORT || 5000;
const dbURI = 'mongodb://127.0.0.1/mydb';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.error('Connection error', err));

app.use(express.json());


// for html file to render
// app.get('/', (req, res)=>{
//   res.sendFile('./index.html')
// })

// Routes
app.use('/auth', authRoutes);

// Protected route example
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});


