import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({changeFilter, filter}) => {
  return (
    <Label htmlFor='filter'>
      Find contacts by name
      <Input type="text" onChange={changeFilter} value={filter}></Input>
    </Label>
  );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };