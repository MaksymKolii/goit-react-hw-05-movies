import PropTypes from 'prop-types';
export const SearchForm = ({ formFunc }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const check = form.elements.something.value;

    if (check.trim() === '') {
      return alert('Nothing to search');
    }
    formFunc({ moviename: form.elements.something.value });
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="something" />
      <button>Search</button>
    </form>
  );
};
SearchForm.propTypes = {
  formFunc: PropTypes.func,
};
