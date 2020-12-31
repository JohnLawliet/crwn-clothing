import React from 'react'
import {Route} from 'react-router-dom'
import Contact from './contact.styles'
import ContactUs from '../../components/contact-us/contact-us.component'

const ContactPage = ({ match }) => (
    <Contact>
        <Route exact path={`${match.path}`} component={ContactUs}/>
    </Contact>
)

export default ContactPage