import React, { Component } from 'react';
import shortid from 'shortid';

import { AppLayout } from './AppLayout.jsx';
import { Form } from './Form.jsx';
import { Header } from './Header.jsx';
import { Title } from './Title.jsx';
import { ContactList } from './ContactList.jsx';
import { ContactListItem } from "./ContactListItem.jsx";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  isContactExist = (name) => {
    const { contacts } = this.state;
    return contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
  };

  handleFormSubmit = ({ name, number }) => {
    if (this.isContactExist(name)) {
      alert(`The contact ${name} already exists!`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Header />
        <AppLayout>
          <div>
            <Title className="mb-10" tag="h2">
              Add contact
            </Title>
            <Form onSubmit={this.handleFormSubmit} />
          </div>

          <div>
            <Title className="mb-10" tag="h2">
              Contact
            </Title>
            {contacts.length > 0 ? (
              <div>
                <input
                  type="text"
                  value={this.state.filter}
                  onChange={this.handleFilterChange}
                  placeholder="Filter contacts..."
                />
                <ContactList
                  contacts={contacts}
                  filter={this.state.filter}
                  onDelete={this.handleDeleteContact}
                  renderItem={(contact) => (
                    <ContactListItem
                      key={contact.id}
                      contact={contact}
                      onDelete={this.handleDeleteContact}
                    />
                  )}
                />
              </div>
            ) : (
              <Title tag="h3">No contacts</Title>
            )}
          </div>
        </AppLayout>
      </>
    );
  }
}
