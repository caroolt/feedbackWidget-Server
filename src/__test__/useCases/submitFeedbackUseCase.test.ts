import { SubmitFeedbackUseCase } from './../../useCases/submitFeedbackUseCase';
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;bas64,testSubmit.png',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should NOT be able to submit feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;bas64,testSubmit.png',
      })
    ).rejects.toThrow();
  });

  it('should NOT be able to submit feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;bas64,testSubmit.png',
      })
    ).rejects.toThrow();
  });

  it('should NOT be able to submit feedback if screenshot does NOT begin with "data:image/png;bas64"', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'testSubmit.png',
      })
    ).rejects.toThrow();
  });
});
