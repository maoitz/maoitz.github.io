import { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "8e20871e-3e03-41fe-9d68-2154547bc6f3",
        ...formData,
        subject: "New Message from Portfolio Contact Form",
        from_name: formData.name,
        reply_to: formData.email,
        // Add g-recaptcha-response key here
        // "g-recaptcha-response": "YOUR_RECAPTCHA_KEY",
      }),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-form-container"
    >
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Input */}
        <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <label className="contact-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <label className="contact-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
        </motion.div>

        {/* Message Input */}
        <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <label className="contact-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          />
        </motion.div>

        {/* Hidden honeypot field for spam-prevention */}
        <input type="hidden" name="botcheck" />

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="contact-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </motion.button>

        {/* Privacy Notice */}
        <p className="contact-privacy-notice">
          This form is protected by reCAPTCHA and the Google
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Privacy Policy
          </a>
          and
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Terms of Service
          </a>
          apply.
        </p>
      </form>

      {/* Success/Error Messages */}
      {status === "success" && (
        <motion.p
          className="contact-success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Message sent successfully!
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          className="contact-error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Something went wrong. Try again!
        </motion.p>
      )}
    </motion.div>
  );
}

export default ContactForm;
