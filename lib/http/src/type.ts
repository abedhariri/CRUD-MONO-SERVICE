export interface ErrorHandlerI {
  notFound: () => void;
  conflict: () => void;
  unAuthenticated: () => void;
  unAuthorized: () => void;
  internalServerError: () => void;
  badRequest: () => void;
}
