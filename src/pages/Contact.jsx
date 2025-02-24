  import { useEffect } from 'react';
  import ContactHeader from '../components/contact/ContactHeader';
  import ContactForm from '../components/contact/ContactForm';
  import './Contact.css';

  function Contact() {
    useEffect(() => {
      document.title = "Contact | Karl Almstedt";
    }, []);
    
    return (
      <div className="contact-page">
        <ContactHeader />
        <ContactForm />
      </div>
    );
  };
  
  export default Contact;