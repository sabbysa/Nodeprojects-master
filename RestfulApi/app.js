const  express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
const { json } = require('body-parser');
//routes middleware
const postRoutes=require('./Routes/Post');
app.use('/api', postRoutes);



//database
mongoose.connect('mongodb+srv://shiva:8977shiva@shivamongo-pmm8n.mongodb.net/shiva?authSource=admin&replicaSet=shivamongo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true',{ useNewUrlParser: true,useUnifiedTopology: true  },()=>console.log('DB connected'));

app.listen(10101,()=>console.log('Running Sever'));
