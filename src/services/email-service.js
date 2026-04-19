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

const subscribeEvents=async(payload)=>{
    let service=payload.service;
    let data=payload.data;
    switch (service) {
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        
        case 'SEND_BASIC_EMAIL':
            await sendBasicEmail(data);
            break;
    
        default:
            console.log('No matching service found');
            break;
    }
}

module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    subscribeEvents
}

/*
SMTP --> a@b.com
receiver --> d@c.com

but we can do from--> a@b.com
 */