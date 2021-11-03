import React, {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {Title, ContactBody, Textarea, Buttons} from './contact-us.styles'
import emailjs, {init} from 'emailjs-com';

const ContactUs = () => {
    const [contactForm, setContactForm] = useState({
        email: '',
        subject: '',
        message: '',
        name: ''
    })
    const {email, subject, message, name} = contactForm

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("e.target : ",e.target)
        init(process.env.REACT_APP_EMAILJS)
        emailjs.sendForm('service_lwd2epy', 'template_fopdvv8', e.target)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        resetForm()
    }

    const resetForm = (reset = "full") => {
        if (reset === "full")
            setContactForm({
                email: '',
                subject: '',
                message: '',
                name: ''
            })
        else
            setContactForm({ ...contactForm, message: ''})
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
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    required
                />           
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
                <br/>
                <Buttons>
                    <CustomButton type="submit">SEND</CustomButton>
                    <CustomButton 
                        type="button"
                        onClick={() => resetForm("message")} isGoogleSignIn>RESET MESSAGE</CustomButton>
                </Buttons>
            </form>
        </ContactBody>
    )
}

export default ContactUs