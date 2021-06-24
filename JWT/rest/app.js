const  express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());


//middlewar
const Routes=require('./routes')
app.use('/amazon', Routes);

//database
mongoose.connect('mongodb+srv://shiva:8977shiva@shivamongo-pmm8n.mongodb.net/shiva?authSource=admin&replicaSet=shivamongo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true',{ useNewUrlParser: true,useUnifiedTopology: true  },()=>console.log('DB connected'));


app.listen(3000, ()=>console.log('runs'))