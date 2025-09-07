import { List } from "./ContactList.js";
import ContactItem from "../ContactItem/ContactItem.jsx";

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDeleteContact}
      />
    ))}
  </List>
);

export default ContactList;