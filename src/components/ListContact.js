import React from "react";
import ContactCard from "./ContactCard";

const ListContact = (props) =>{
    console.log(props);
        const deleteContactHandler = (id) =>{
            props.getContact(id);
        }
    const renderContactList = props.contacts.map((contact) =>{
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key = {contact.id}></ContactCard>;
    })
    return <div className="ui celled list">{renderContactList}</div>
    
};
export default ListContact;