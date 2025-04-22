import { Base } from "../type";

interface ReadI extends Base {
  id: string;
}
export const read = async ({ id, errorHandler, repo }: ReadI) => {
  const questionnaire = await repo.read(id);

  errorHandler.notFound();

  return questionnaire;
};

export const readAll = async ({ errorHandler, repo }: Base) => {
  return await repo.readAll();
};
