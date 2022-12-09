import React, { Component } from 'react';
import { MainTitle } from './MainTitle/MainTitle';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Filter} from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
  
    if(parsedContacts) {
      this.setState({contacts: parsedContacts});
    }
  }
  
  componentDidUpdate(_, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = values => {
    const contacts = this.state.contacts;

    contacts.every(contact => contact.name !== values.name)
    ? this.setState({
        contacts: this.state.contacts.concat(values),
      })
        : Notify.failure('This contact is already in contacts');
};

changeFilter = e => {
  this.setState({
    filter: e.currentTarget.value,
  });
};


filter = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter));
  
  if (visibleContacts.length < 1) {
    Notify.warning('There are not contact in phonebook');
  }
  return visibleContacts;
};

deleteContact = contactId => {
  this.setState(prevState =>  ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
}



  render() {
    const { filter, contacts } = this.state;
      
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
          addContacts={this.addContact}
        />
        <SectionTitle title = 'Contacts'/>
           <Filter filter={filter} changeFilter={this.changeFilter}/>
            
          <ContactList 
            contacts={this.filter(contacts, filter)}
            deleteContact = {this.deleteContact}
            />
                    
    </div>
    )
  }
}




