import React, {Component} from 'react';
import deleteButtonSVG from '../../delete-button.svg';

import './contact.css';

export default class Contact extends Component {

    formatData = (date) => {
        const formattedDate = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)
        return formattedDate
    }

    render() {
        const { name, surname, email, lastVisitTime, imgPath } = this.props;
        const fullName = name + " " + surname;

        return (
            <div className="contactComponent">
                <img 
                    className="avatar"
                    src={imgPath}
                />
                <div className="userInformation">
                    <div className="name">
                        {fullName}
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
                <div className="lastTime">
                    {this.formatData(lastVisitTime)}
                </div>
                <button className="deleteButton" onClick={() => this.props.deleteContact(this.props.id)}>
                    <img className="deleteButtonImage" src={deleteButtonSVG}/>
                </button>
            </div>
        )
    }
}