import { AppError } from "./error";
import { ErrorHandlerI } from "./type";

export const ErrorHandler = (): ErrorHandlerI => ({
  conflict: () => {
    throw new AppError("CONFLICT", 409);
  },
  notFound: () => {
    throw new AppError("NOT_FOUND", 404);
  },
  unAuthenticated: () => {
    throw new AppError("UNAUTHENTICATED", 403);
  },
});
