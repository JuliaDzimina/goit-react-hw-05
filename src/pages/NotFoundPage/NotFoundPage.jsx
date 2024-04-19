import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.pageNotFound}>
      <h1>Page not found!</h1>
      <Link to="/" className={css.btnGoHome}>
        GO HOME
      </Link>
    </div>
  );
};

export default NotFoundPage;
