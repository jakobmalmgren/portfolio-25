import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CiMail } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { PiMapPinSimpleAreaThin } from "react-icons/pi";
import { BsPerson, BsPersonPlus, BsPencil } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_czj3w5i", "template_gl5786t", form.current, {
        publicKey: "GDa6llSeIaoU6KPtP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-container-content">
        <div className="contact-container-wrapper">
          <div className="contact-container-icons">
            <div className="icon-wrapper">
              <GiRotaryPhone className="icon-circle__icon " />

              <section className="icon-wrapper__info-wrapper">
                <p className="icon-wrapper__text-below"> (+46) 768- 699954</p>
              </section>
            </div>
            <br />
            <div className="icon-wrapper">
              <CiMail className="icon-circle__icon " />
              <section className="icon-wrapper__info-wrapper">
                <p className="icon-wrapper__text-below">
                  Jakob.Malmgren1987@gmail.com
                </p>
              </section>
            </div>
            <br />
            <div className="location-wrapper">
              <div className="icon-wrapper">
                <PiMapPinSimpleAreaThin className="icon-circle__icon " />

                <section className="icon-wrapper__info-wrapper">
                  <p className="icon-wrapper__text-below">
                    Kristianstad, Sweden
                  </p>
                </section>
              </div>
            </div>

            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71346.91532573519!2d14.0632383450249!3d56.025753522488046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4654034d24249807%3A0x4019078290e7ae0!2sKristianstad!5e0!3m2!1ssv!2sse!4v1689156567853!5m2!1ssv!2sse"
              }
              width="100%"
              height="290"
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-container-inputfields">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-wrapper">
                <div className="input-wrapper">
                  <label htmlFor="fname" className="formLabel">
                    First Name
                  </label>
                  <input
                    autoFocus
                    required
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your first name.."
                  />
                  <BsPerson className="input-icon" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="lname" className="formLabel">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                  <BsPersonPlus className="input-icon" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="email" className="formLabel">
                    Email
                  </label>
                  <input
                    pattern="^[\w#][\w\.\`+#](.[\w\\`#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$"
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email.."
                  />
                  <CiMail className="input-icon" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="subject" className="formLabel">
                    Subject
                  </label>
                  <textarea
                    required
                    type="text"
                    minLength="20"
                    rows="8"
                    cols="50"
                    id="subject"
                    name="message"
                    placeholder="Write something.."
                  ></textarea>
                  <BsPencil className="input-icon" />
                </div>
              </div>
              {sent ? (
                <p className="success-message">
                  Tack! Ditt meddelande har skickats.
                </p>
              ) : (
                <p className="visible">Tack! Ditt meddelande har skickats.</p>
              )}

              <button className="form-btn" type="submit" value="Submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
