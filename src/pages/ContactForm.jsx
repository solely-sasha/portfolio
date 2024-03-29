import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/ContactForm.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rtam3wy",
        "template_jnhm4x7",
        form.current,
        "HVkc9uu299CHJI6Cr"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-form-container ">
      <h1>Send me a message </h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
