import PropTypes from 'prop-types';
import { ContactItem } from "components/ContactItem/ContactItem";
import { List} from './ContactList.styled'
export const ContactList = ({contacts, deleteContact}) => {
    return(
        <List>
             {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            name={name}
            key={id}
            number = {number}
            id={id}
            deleteContact = {deleteContact}
            
          />
        );
      })}
        </List>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};