const { models } = require('mongoose');

const router=require('express').Router();//
const verfiy=require('./verifyToken');


router.get('/posts', verfiy, (req,res)=>{

    res.json({
        posts:{
            title:'my first post',
            description:'random data'
        }
    });
});



router.get('/bags', verfiy, (req,res)=>{

    res.json({
        posts:{
            title:'my first post',
            description:'random data'
        }
    });
});

module.exports=router;