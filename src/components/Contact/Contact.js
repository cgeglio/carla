import React from "react";
import { Card } from "antd";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

function Contact() {
  const [state, handleSubmit] = useForm("mvolzpqo");

  return (
    <div id="contact">
      <div className="section-header">Contact</div>
      <Card>
        {state.succeeded ? (
          <div className="success-message">Message sent. Thanks!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        )}
      </Card>
    </div>
  );
}

export default Contact;
