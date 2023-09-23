'use server'
import React from 'react'
import { Resend } from 'resend'
import { validateString, getErrorMessage } from '../lib/utils'
import { EmailTemplate } from '../components/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (values:any) => {
  const name = values.senderName;
  const email = values.senderEmail;
  const message = values.senderMessage;

  // simple validation
  if (!validateString(email, 500)) {
    return {
      error: 'Invalid email address'
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message'
    }
  }

  let data

  try {
    data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'officialmelihkaan@gmail.com',
      subject: 'New message from ' + email,
      reply_to: email as string,
      html:`<p>Gönderen Mail Addressi:${email}<p/> <p> name:${name}<p/> <p>Gönderdiği mesaj:${message}<p/> `,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}
