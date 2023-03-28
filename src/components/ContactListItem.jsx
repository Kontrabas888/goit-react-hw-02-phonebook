export const ContactListItem = ({ name, number, onDelete }) => {
};

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className="list">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="list-item">
          <ContactListItem
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
};
