import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#a4a2a6"
        radius="12"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
