import { Base, CreateQuestionnaire } from "../type";

interface CreateI extends Base {
  questionnaire: CreateQuestionnaire;
}
export const create = async ({ errorHandler, repo, questionnaire }: CreateI) => {
  const id = await repo.create(questionnaire);

  return repo.read(id);
};
