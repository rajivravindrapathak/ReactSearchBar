import React from 'react'
import { Link } from "react-router-dom"

const ContactList = (props) => {
    console.log(props)

    const deleteConactHandler = (id) => {
        props.getContactId(id)
    }
    
  return (
    <div className='main'>
      <h1>contactlist
          <Link to="/add">
            <button className='ui button blue right'>Add contact</button>
          </Link>
      </h1>
      <div>
          <div>
              <input type="text" placeholder='Search contacts' />
              <i className='search icon'></i>
          </div>
      </div>
      <div>{renderContactList}</div>
    </div>
  )
}

export default ContactList
