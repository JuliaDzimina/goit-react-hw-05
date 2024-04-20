import toast, { Toaster } from "react-hot-toast";
import css from "./SearcForm.module.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements.search.value.trim();
    if (!form) {
      toast.error("Please enter search name of movie!");
      return;
    }

    onSearch(form);
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
        <Toaster position="top-left" />
      </form>
    </div>
  );
};

export default SearchForm;
