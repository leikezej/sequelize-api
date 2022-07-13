const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
   origin: 'http:localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
// sample api
app.get('/', (req, res) => {
   console.log('Welcome User')
   res.json({message: 'hello'})
   res.send({message: 'hello'})
});

const router = require('./routes/productRouter');
   app.use('/api/products',  router);
   
   app.get('/', (req, res) => {
      res.json({
          name: 'Jepski',
          email: 'jepski@gmail.com',
      })
  })
   

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log(`server is running on PORT ${PORT}`);
})