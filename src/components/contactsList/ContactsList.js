import React, {Component} from 'react';
import Contact from './Contact';
import contactsMoqArray from '../../mocqData/contacts';

import './contactsList.css';

export default class ContactsList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            contactsArray: contactsMoqArray()
        }
    }

    deleteContact = (contactId) => {
        const {contactsArray} = this.state
        contactsArray.splice(contactId, 1)

        this.setState({
            contactsArray: contactsArray
        });
    }

    render() {
        const { contactsArray } = this.state;

        return (
            <div className="contacts">
                <div className="contactsList">
                    {contactsArray.map((element, id) => (
                        <Contact 
                            name={element.name}
                            surname={element.surname}
                            email={element.email}
                            lastVisitTime={element.lastVisitTime}
                            imgPath={element.imgPath}
                            deleteContact={this.deleteContact}
                            id={id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}