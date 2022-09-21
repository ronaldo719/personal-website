

import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

export default function Contact() {

    const form = useRef();
    const [formSent, setFormSent] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${serviceID}`,
                `${templateID}`,
                form.current,
                `${publicKey}`
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    setFormSent(true);

                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contactSection" id="contact">
            <div className="contactTitle">
                <FontAwesomeIcon icon={faEnvelope} className="envelope" />
                <h2 className="headerContact">  Get in touch.</h2>
            </div>
            <div className="formSent" style={{ display: formSent ? 'block' : 'none' }}>
                <p className="formSentMessage">Message sent</p>
            </div>
            <div className="middleContact">
                <div className="contactRightSide">

                    <form className="contactForm" ref={form} onSubmit={sendEmail} style={{ display: formSent ? 'none' : 'block' }}>
                        <input className="contactInput" required type="name" name="name" id="name" placeholder="Name" ></input>
                        <input className="contactInput" required type="email" name="email" id="email" placeholder="Email" ></input>
                        <textarea className="messageContact" required name="message" id="email_body" placeholder="Message" rows="6" ></textarea>

                        <input className="contactSubmit" type="submit" value="Send Message"></input>
                    </form>
                </div>
                <div className="contactLeftSide">
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} className="contactList" /><a href="mailto:rgarciahernandez.ucsd.edu">rgarciahernandez.ucsd.edu</a></li>
                        <li><FontAwesomeIcon icon={faLocationDot} className="contactList" /><a >San Diego, CA</a></li>
                        <li><FontAwesomeIcon className="contactList" icon={faGithub} /> <a href="https://github.com/ronaldo719" target="_blank">ronaldo719</a></li>
                        <li><FontAwesomeIcon className="contactList" icon={faLinkedin} /><a href="https://www.linkedin.com/in/ronaldogarcia7/" target="_blank">ronaldogarcia7</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}