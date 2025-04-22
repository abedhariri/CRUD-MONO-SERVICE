import { create } from "./crud/create";
import { deleteQuestionnaire } from "./crud/delete";
import { read, readAll } from "./crud/read";
import { update } from "./crud/update";

export const Questionnaire = () => {
  return {
    create,
    read,
    readAll,
    update,
    delete: deleteQuestionnaire,
  };
};
