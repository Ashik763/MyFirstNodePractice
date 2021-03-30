const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const users = ['a','b','c','d','e','f'];

app.get('/',(req,res) => {
    const fruit ={
        product :'ada',
        price :220
    }
    res.send("Node ami onek pari___ thank you very much");
});


app.get('/fruits/banana',(req,res) => {
    res.send({fruit:'banana',quantity:1000,price:100000});
})

app.get('/users/:id',(req,res) =>{
 const id = req.params.id;
 const name = users[id];
 res.send({id,name});

//  console.log(res);

})

app.post('/addUser',(req, res) =>{
    console.log('post req send');
}) 




app.listen(4000,() => console.log('listening to port 4000'));