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
  unAuthorized: function (): void {
    throw new AppError("UNAUTHORIZED", 401);
  },
  internalServerError: function (): void {
    throw new AppError("INTERNAL_SERVER_ERROR", 500);
  },
});
