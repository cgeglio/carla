import React from "react";
import { Card } from "antd";
import { useForm } from "@formspree/react";
import Form from "./Form";
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
          <Form state={state} handleSubmit={handleSubmit} />
        )}
      </Card>
    </div>
  );
}

export default Contact;
