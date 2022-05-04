import { prisma } from '../../prisma';
import {
  FeedbackDataForCreation,
  FeedbacksRepository,
} from '../feedbacksRepository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackDataForCreation) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
