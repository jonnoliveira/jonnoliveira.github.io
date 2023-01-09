import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-container" id="contact">
        <div className="contact-description">
          <h1>Contact Me</h1>
          <p>If you wish to contact me, feel free to use the following methods. I look forward to it!</p>
        </div>
        <fieldset className="contact-contents">
          <div className="contents">
            <div className="email-content">
              <div className="email">
                <img src="https://cdn-icons-png.flaticon.com/512/546/546394.png" alt="email logo" />
                <p>Email: dev.jonnoliveira@gmail.com </p>
              </div>
            </div>
            <div className="linkedin-content">
              <a href="https://www.linkedin.com/in/jonnoliveira/" target="_blank" className="linkedin" rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png" alt="linkedin logo" />
                <p>Let's connect</p>
              </a>
            </div>
          </div>
        </fieldset>
      </section>
    )
  }
}
