import express from "express";
import { errorHandlerMiddleware } from "./middlewares/error";

import { OracleRepo } from "@packages/questionnaire-package/src/repo/repo";
import { Questionnaire } from "@packages/questionnaire-package/src";
import { ErrorHandler } from "http-utils/src/error-handler";

const app = express();
const port = 3000;

const questionnaireService = Questionnaire();
const restErrorHandlers = ErrorHandler();
const questionnaireRepo = OracleRepo();

app.post("/questionnaires", async (req, res) => {
  const body = await req.body;

  const createdQuestionnaire = await questionnaireService.create({
    errorHandler: restErrorHandlers,
    questionnaire: body,
    repo: questionnaireRepo,
  });
  res.status(201).send(createdQuestionnaire);
});

app.get("/questionnaires", async (req, res) => {
  const questionnaires = await questionnaireService.readAll({
    errorHandler: restErrorHandlers,
    repo: questionnaireRepo,
  });
  res.status(200).send(questionnaires);
});

app.get("/questionnaires/:id", async (req, res) => {
  const id = req.params.id;
  const questionnaire = await questionnaireService.read({
    id,
    errorHandler: restErrorHandlers,
    repo: questionnaireRepo,
  });
  res.status(200).send(questionnaire);
});

app.patch("/questionnaires/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const questionnaire = await questionnaireService.update({
    id,
    questionnaire: body,
    errorHandler: restErrorHandlers,
    repo: questionnaireRepo,
  });

  res.status(200).send(questionnaire);
});

app.delete("/questionnaires/:id", async (req, res) => {
  const id = req.params.id;
  await questionnaireService.read({ id, errorHandler: restErrorHandlers, repo: questionnaireRepo });
  res.status(200).send();
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
