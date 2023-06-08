import React from "react";
import ContactCard from './ContactCard';
const ContactList = (props) => {
    // console.log(props)
    // function to render contacts using map
    const renderContactList = props.contacts.map((contact) =>{
        // return (
        //     <div className="item">
        //         <div className="content">
        //             <div className="header">{contact.name}</div>
        //             <div>{contact.email}</div>
        //         </div>
        //             <i className="trash alternate outline icon"></i>
        //     </div>
        // )
        // Passing data to another component to display on card
        const deleteContactHandler = (id) =>{
            props.getContactId(id);
        }
        return <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/>
    });

    return <div className="ui celled list">{renderContactList}</div>
    
}

export default ContactList;