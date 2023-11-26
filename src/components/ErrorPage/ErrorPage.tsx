import { useRouteError } from "react-router-dom";
import classes from './error-page.module.scss';

export interface ErrorPageProps {}


export const ErrorPage = (props: ErrorPageProps) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}