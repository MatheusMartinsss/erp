const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.raw())


app.get('/', (req, res) =>{
    res.json({message: 'My first API, Hello Everyone!'})
})
require('./routers/contas.router')(app)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
 
    console.log('the API is running')

})

const db = require('./models')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('DB Connect')
    })
    .catch(err =>{
        console.log(err)
        process.exit();
    })