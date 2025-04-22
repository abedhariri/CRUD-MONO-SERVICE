export interface ErrorHandlerI {
  notFound: () => void;
  unAuthenticated: () => void;
  conflict: () => void;
}
