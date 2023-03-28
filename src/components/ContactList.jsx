import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './Contact.jsx';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className="list">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="list-item">
          <Contact
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
