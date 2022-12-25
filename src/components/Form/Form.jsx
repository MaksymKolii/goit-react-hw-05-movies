import PropTypes from 'prop-types';
import { Form, Input, Button } from './Form.styled';

import { IconContext } from 'react-icons';
import { VscSearch } from 'react-icons/vsc';

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
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="something"
        autoComplete="off"
        placeholder="Put something to find ..."
      />
      <Button>
        <IconContext.Provider
          value={{
            size: 25,
            color: 'tomato',
          }}
        >
          <VscSearch />
        </IconContext.Provider>
      </Button>
    </Form>
  );
};
SearchForm.propTypes = {
  formFunc: PropTypes.func,
};
