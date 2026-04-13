const sender=require('../config/emailConfig');

const sendBasicEmail=async (mailfrom,mailto,mailSubject,mailBody) => { 
    try {
        const response=await sender.sendMail({
            from:mailfrom,
            to:mailto,
            subject:mailSubject,
            text:mailBody
        });
        console.log('Email sent successfully',response);
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    sendBasicEmail
}

/*
SMTP --> a@b.com
receiver --> d@c.com

but we can do from--> a@b.com
 */