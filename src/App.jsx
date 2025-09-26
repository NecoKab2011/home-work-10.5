import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";
import { Box, Title1, Title2 } from "./App.js";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const saved = localStorage.getItem("contacts");
    if (saved) {
      this.setState({ contacts: JSON.parse(saved) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    let isExist = false;
    for (let contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        isExist = true;
        break;
      }
    }

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      const updatedContacts = [];
      for (let contact of prevState.contacts) {
        if (contact.id !== id) {
          updatedContacts.push(contact);
        }
      }
      return { contacts: updatedContacts };
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const result = [];

    for (let contact of contacts) {
      if (contact.name.toLowerCase().includes(normalizedFilter)) {
        result.push(contact);
      }
    }

    return result;
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Box>
        <Title1>Phonebook</Title1>
        <ContactForm onAddContact={this.addContact} />

        <Title2>Contacts</Title2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}

export default App;
