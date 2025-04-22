import { Base } from "../type";
import { Questionnaire } from "../type";

interface UpdateI extends Base {
  id: string;
  questionnaire: Omit<Questionnaire, "id">;
}
export const update = async ({ id, questionnaire, errorHandler, repo }: UpdateI) => {
  const questionnaireToUpdate = await repo.read(id);

  if (!questionnaireToUpdate) errorHandler.notFound();

  await repo.update(id, questionnaire);

  return repo.read(id);
};
