const sender=require('../config/emailConfig');
const TicketRepository=require('../repository/ticket-repository');
const repo = new TicketRepository();
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

const fetchPendingEmails=async(timestamp)=>{
    try {
        const response=await repo.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification=async(data)=>{
    try {
        console.log(data);
        const response=await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket=async(id,data)=>{
    try {
        const response=await repo.update(id,data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}

/*
SMTP --> a@b.com
receiver --> d@c.com

but we can do from--> a@b.com
 */