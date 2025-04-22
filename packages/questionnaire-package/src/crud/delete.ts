import { Base } from "../type";

interface DeleteI extends Base {
  id: string;
}
export const deleteQuestionnaire = async ({ id, errorHandler, repo }: DeleteI) => {
  const questionnaire = await repo.read(id);

  if (!questionnaire) errorHandler.notFound();

  await repo.delete(id);
};
