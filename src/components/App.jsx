import { useState, useEffect } from 'react';
import { MainTitle } from './MainTitle/MainTitle';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Filter} from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const contactList = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

export default function App(){
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactList
  );
  const [filter, setFilter] = useState('');
  
  const addContact = values => {
          
        contacts.every(contact => contact.name !== values.name)
        ? setContacts(state => state.concat(values))
            : Notify.failure('This contact is already in contacts');
    };

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
   
    const changeFilter = e => {
        setFilter(e.currentTarget.value);
    };

function contactsFilter(contacts, filter){
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter));
  
  if (visibleContacts.length < 1) {
    Notify.warning('There are not contact in phonebook');
  }
  return visibleContacts;
};
const deleteContact = contactId => {
  setContacts(state => state.filter(contact => contact.id !== contactId));
};

return(
  <div
            style={{
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#E4E5EA',
                }}>
          <MainTitle title = 'Phonebook'/>
          <ContactForm
            addContacts={addContact}
          />
          <SectionTitle title = 'Contacts'/>
             <Filter filter={filter} changeFilter={changeFilter}/>
              
            <ContactList 
              contacts={contactsFilter(contacts, filter)}
              deleteContact = {deleteContact}
              />
                      
      </div>
);
}

 

  




