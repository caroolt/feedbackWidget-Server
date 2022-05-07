import { MailAdapter } from '../adapters/mailadapter';
import { FeedbacksRepository } from '../repositories/feedbacksRepository';
interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required');
    }

    if (!comment) {
      throw new Error('Comment is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
        `<div style="max-width: 600px; margin: 0 auto;" class="email-container">`,
        `<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">`,
        `<tr>`,
        `<td class="bg_white" style="padding: 1em 2.5em;">`,
        `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">`,
        `<tr>`,
        `<td class="logo" style="text-align: center;">`,
        `<h1>FeedGet - Caronte</h1>`,
        ` </td>`,
        `</tr>`,
        `</table>`,
        `</td>`,
        `</tr>`,
        `<tr>`,
        `<td class="hero hero-2 bg_white" style="padding: 4em 0;">`,
        `<table>`,
        `<tr>`,
        `<td>`,
        `<div class="text" style="padding: 0 3em; text-align: center;">`,
        `<h2> Um usuário enviou um feedback do tipo <span style="color:#8257E5">${type}</span> no FeedGet com o conteúdo:</h2>`,
        `<p style="word-break: break-all;">${comment}</p>`,
        `</div>`,
        `</td>`,
        `</tr>`,
        `</table>`,
        `</td>`,
        `<div style="width:auto;height:auto;">`,
        screenshot
          ? `<img src="${screenshot}" style="width:100%;height:100%;"`
          : '',
        `</div>`,
        `</div>`,
        `</div>`,
      ].join('\n'),
    });
  }
}
