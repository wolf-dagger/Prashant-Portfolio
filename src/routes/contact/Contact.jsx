import React from "react";
import "./contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const handleClick = () => {
    alert("Thankyou for connecting, I will reach You soon");
  };
  return (
    <>
      <center className="contactMe">
        <h1>
          <span style={{ color: "#FF7722" }}>C</span>ontact{" "}
          <span style={{ color: "#FF7722" }}>M</span>e
        </h1>
      </center>

      <div className="formVal">
        <Form>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder="Message" as="textarea" rows={3} />
          </Form.Group>
          <center>
            <Button variant="warning" onClick={handleClick}>
              Send
            </Button>{" "}
          </center>
        </Form>
      </div>
      <p>Thank You</p>
    </>
  );
}

export default Contact;
