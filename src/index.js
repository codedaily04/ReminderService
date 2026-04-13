const express=require('express');
const bodyParser=require('body-parser');

const { PORT }=require('./config/serverConfig');

// const{sendBasicEmail} =require('./services/email-service');
const TicketController=require('./controllers/ticket-controller');

const jobs=require('./utils/jobs');

const setupandStartserver=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
        jobs();
    //     sendBasicEmail(
    //     'support@admin.com', or '"Support" <support@admin.com>'
    //     'gmailforreminders04@gmail.com',
    //     'This is testing mail',
    //     'how u doin?'
    // )
    });
}

setupandStartserver();