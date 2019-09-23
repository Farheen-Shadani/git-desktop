import React from 'react';
import './ContactUs.css';
import ContactButton from './ContactButton'

function ContactUs() {
    return (
        <section id="contact">

            <h2>Review Our Work</h2>

            <div>
                <ContactButton
                    hrefURL="https://github.com/Farheen-Shadani?tab=repositories"
                    anchorText="Farheen Shadani"
                />

                <ContactButton
                    hrefURL="https://github.com/Sana-ishaque?tab=repositories"
                    anchorText="Sana Ishaque"
                />

                <ContactButton
                    hrefURL="https://github.com/SyedaTaliya?tab=repositories"
                    anchorText="Syeda Taliya"
                />
            </div>

        </section>
    );
}

export default ContactUs;