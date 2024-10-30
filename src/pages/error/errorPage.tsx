import { useRouteError } from "react-router-dom";
import styles from "./errorPage.module.css";
import { ROOT_PATH } from "../../utils/urls.ts";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error("== ErrorPage ==\nResponded with following error: \n", error);
  const handleRedirect = () => {
    return window.location.assign(ROOT_PATH);
  };
  const errorMessage = getErrorMessage(error);
  return (
    <div id="error-page" className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>

      <button className={styles.errorButton} onClick={handleRedirect}>
        Go back and try again
      </button>
    </div>
  );
};

const getErrorMessage = (error: any) => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if ("statusText" in error) {
    return error.statusText;
  }
  return "Unknown error";
};
