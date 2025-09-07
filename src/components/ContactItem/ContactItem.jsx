import { Item, Btn } from "./ContactItem";

const ContactItem = ({ id, name, number, onDelete }) => (
  <Item>
    {name}: {number}
    <Btn onClick={() => onDelete(id)}>Delete</Btn>
  </Item>
);

export default ContactItem;