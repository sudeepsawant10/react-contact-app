import React, {useEffect, useState} from 'react';
import './App.css';
import { v4 as uuid } from "uuid";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  // key for localstorage
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []

  );
  // const contacts = [
  //   {
  //     id:1,
  //     name:"dipesh",
  //     email:"dipesh10@gmail.com"
  //   },
  //   {
  //     id:2,
  //     name:"Nick",
  //     email:"nick11@gmail.com"
  //   },
  // ];
  const addContactHandler = (contact) => {
      // console.log("handler = ", contact);
      // call setContact to update the state of contacts
      setContacts([...contacts, { id: uuid(), ...contact }]);

  }

  // To remove contact on click
  const removeContactHandler = (id)=> {
      const updatedContactList = contacts.filter((contact) => {
        return contact.id != id;
      });
      setContacts(updatedContactList);
  }
  
  // To get the data from local storage
   useEffect(()=>{
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("useEffect= ",storedContacts);
    if(storedContacts) setContacts(storedContacts);
    
  },[]);

  //To save data into local storage
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
    
  )
}

export default App;
