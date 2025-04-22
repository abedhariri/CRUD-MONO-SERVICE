import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../../lib/http/src/error";

export const errorHandlerMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};
