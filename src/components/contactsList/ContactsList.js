import React, {Component} from 'react';
import Contact from './Contact';
import contactsMoqArray from '../../mocqData/contacts';

import './contactsList.css';

export default class ContactsList extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            contactsArray: contactsMoqArray(),
            searchedArray: contactsMoqArray()
        }
    }

    deleteContact = (contactId) => {
        const {contactsArray} = this.state
        contactsArray.splice(contactId, 1)

        this.setState({
            contactsArray: contactsArray
        });
    }

    handleSearch = (text) => {
        var filteredArray = this.state.contactsArray.filter(element => element.name.toLowerCase().includes(text.toLowerCase()) 
                                                                    || element.surname.toLowerCase().includes(text.toLowerCase()))

        this.setState({
            searchedArray: filteredArray
        })
    }

    render() {
        const { searchedArray } = this.state;

        return (
            <div className="contacts">
                <input style={{width:"415px"}} onChange={(e) => this.handleSearch(e.target.value)}/>
                <div className="contactsList">
                    {searchedArray.map((element, id) => (
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