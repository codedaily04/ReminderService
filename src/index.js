const express=require('express');
const bodyParser=require('body-parser');

const { PORT }=require('./config/serverConfig');

const{sendBasicEmail} =require('./services/email-service');

const setupandStartserver=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);

    //     sendBasicEmail(
    //     'support@admin.com', or '"Support" <support@admin.com>'
    //     'gmailforreminders04@gmail.com',
    //     'This is testing mail',
    //     'how u doin?'
    // )
    });
}

setupandStartserver();