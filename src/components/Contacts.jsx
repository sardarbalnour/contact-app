import { useState } from "react";

import ContactsList from "./ContactsList";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  // matni ke mixaymm be onvane alert neshon bedim
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          //   in name ha bayad ba maqadir mojod dar state yni klid ha dqiqn yki bashe
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={changeHandler}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeHandler}
        />
        <input
          name="phone"
          type="number"
          placeholder="Phone"
          value={contact.phone}
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
