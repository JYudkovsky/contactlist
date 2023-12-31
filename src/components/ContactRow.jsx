import ContactList from "./ContactList";
import React from "react";

export default function ContactRow({ contact, setSelectedContactID }) {
    return (
        <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }