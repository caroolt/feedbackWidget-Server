import { MailAdapter, SendMailData } from '../mailadapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'cf3c6b5b055522',
    pass: 'dcea0025a74745',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe FeedGet <contato@feedget.com>',
      to: 'Carolina Teixeira <carolinatc1405@gmail.com>',
      subject,
      html: body,
    });
  }
}
