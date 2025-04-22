import { RepoI, Questionnaire, CreateQuestionnaire } from "../type";

export const OracleRepo = (): RepoI => ({
  create,
  delete: deleteQuestionnaire,
  read,
  readAll,
  update,
});

const defaultQuestionnaire: Questionnaire = {
  date: new Date(),
  id: "test_id",
  name: "Test Questionnaire",
};

export const create = async (value: CreateQuestionnaire) => {
  console.log("Questionnaire created");
  return "id";
};

export const deleteQuestionnaire = async (id: string) => {
  console.log("Questionnaire deleted");
};

export const read = async (id: string) => {
  return defaultQuestionnaire;
};

export const readAll = async () => {
  return [defaultQuestionnaire];
};

export const update = async (id: string, value: CreateQuestionnaire) => {
  console.log("Questionnaire updated");
};
