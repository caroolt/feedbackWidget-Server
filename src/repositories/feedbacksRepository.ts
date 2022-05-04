export interface FeedbackDataForCreation {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackDataForCreation) => Promise<void>;
}
