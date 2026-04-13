const nodemailer=require('nodemailer');
//This, we have to do only once, we can reuse this transporter object for sending emails
const {EMAIL_ID,EMAIL_PASSWORD}=require('./serverConfig');

const sender=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASSWORD
    }
});

module.exports=sender;