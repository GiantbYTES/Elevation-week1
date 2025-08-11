import "./Contact.css";

export function Contact({ contact, displayConvo }) {
  return (
    <div className="Contact" onClick={() => displayConvo(contact)}>
      <p>{contact}</p>
    </div>
  );
}

export default Contact;
