const express=require('express')
const mongoose=require('mongoose');
const productRoute=require('./routes/product.route.js');
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);

app.get('/',(req,res)=>{
    res.send("hello from Node ApI!!");
})



mongoose.connect("mongodb+srv://jsamyuktha2004:sam14@cluster0.dx6ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db!!");
    app.listen(3000,()=>{
        console.log('server is running on port 3000');
    });
})
.catch(()=>{
    console.log("Oops,connection failed!!!")
});