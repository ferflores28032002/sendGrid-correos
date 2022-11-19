import smgmail from "@sendgrid/mail";

export const sendGrid = smgmail.setApiKey(process.env.SENDGRID_API_KEY);
