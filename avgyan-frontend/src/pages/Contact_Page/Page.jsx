// import React from 'react'
import "./style.css";

import emailGif from "../../assets/images/contacts/img/email-email-unscreen.gif";
import linkedin from "../../assets/images/contacts/img/linkedin.png";
import telegram from "../../assets/images/contacts/img/telegram.png";
import discord from "../../assets/images/contacts/img/discord_icon.jpeg";
const Page = () => {
  return (
    <div className="contactPage-container">
      <div className="background_picture">
        <span>Get In Touch</span>
        <p>The Ultimate Guide To Ace SDE Interviews.</p>
      </div>
      <div className="subcontainer">
        <div className="main_container">
          <div className="form-container">
            <form action="#" method="post">
              <div className="input-group">
                <label htmlFor="name-input">Name*</label>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject*</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your Subject"
                  required
                />
              </div>
              <div className="input-group massageBox" id="contact_message">
                <label htmlFor="contact_message">Message*</label>
                <textarea name="message" placeholder="Enter your message" required></textarea>
              </div>
              <button className="contact-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Avgayan Is Always Here For You!!!</h2>
            <div className="mail-icon">
              <img src={emailGif} alt="" />
              <p>
                <a href="mailto:support@avgayan.in">support@avgayan.in</a>
              </p>
            </div>

            <div className="social-icons">
              <a href="#">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="#">
                <img src={discord} alt="Discord" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
