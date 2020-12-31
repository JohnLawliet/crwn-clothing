import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {Title, ContactBody, Textarea} from './contact-us.styles'

const ContactUs = () => {
    const [contactForm, setContactForm] = useState({
        email: '',
        subject: '',
        message: ''
    })
    const {email, subject, message} = contactForm

    const handleSubmit = async (event) => {
        event.preventDefault()
    }

    const handleChange = e => {
        const {name, value} = e.target
        setContactForm({ ...contactForm, [name]: value })
    }

    return(
        <ContactBody>
        <Title>Contact US</Title>
            <span>For any queries or feedbacks, feel free to send us an email</span>
            <form onSubmit={handleSubmit}>                
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                    label="Subject"
                    required
                />
                <Textarea
                    placeholder="Enter message here"
                    type="textarea"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    label="Message"
                    required
                />
                <CustomButton type="submit">SEND</CustomButton>
            </form>
        </ContactBody>
    )
}

export default ContactUs