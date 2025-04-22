import { ErrorHandlerI } from "@lib/http-utils/src/type";

export interface RepoI {
  create: (value: CreateQuestionnaire) => Promise<string>;
  readAll: () => Promise<Questionnaire[]>;
  read: (id: string) => Promise<Questionnaire>;
  update: (id: string, value: Omit<Questionnaire, "id">) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

export interface Base {
  errorHandler: ErrorHandlerI;
  repo: RepoI;
}

export type Questionnaire = {
  id: string;
  name: string;
  date: Date;
};

export type CreateQuestionnaire = Omit<Questionnaire, "id">;
