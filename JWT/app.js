const  express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
//routes
const authRoutes=require('./Routes/auth');
const { json } = require('body-parser');
app.use('/api/user', authRoutes);

const postRoutes=require('./Routes/Posts')
app.use('/api/user', postRoutes);


//database
mongoose.connect('mongodb+srv://shiva:8977shiva@shivamongo-pmm8n.mongodb.net/shiva?authSource=admin&replicaSet=shivamongo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true',{ useNewUrlParser: true,useUnifiedTopology: true  },()=>console.log('DB connected'));

app.listen(3000,()=>console.log('Running Sever'));
