// Import React and useState hook
import React, { useState } from 'react';

// Define styles object
const styles = {
  section: {
    background: '#D8D174',
    color: '#465775',
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  title: {
    fontSize: '2.5rem',
  },
  form: {
    button: {
      fontSize: '2.5rem',
      background: '#6C757D'
    },
    input: {
      fontSize: '2.5rem',
    },
    buttonText: {
      color: "#FFF4E9"
    }
  },
};

// Define Contact component
const Contact = () => {
  // Define state variables for form errors
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Define form submit handler function
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Check if there are no errors
    if (!nameError && !emailError && !messageError) {
      // Create mailto link
      const mailtoLink = `mailto:jasonchiu2@yahoo.com?subject=Message from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage: %0D%0A${encodeURIComponent(message)}`;

      // Open mail client
      window.location.href = mailtoLink;
    }
  };

  // Define form input blur handler function
  const handleBlur = (event) => {
    const { id, value } = event.target;
    // If input value is empty, set corresponding error message
    if (!value) {
      if (id === 'name') setNameError('Name is required');
      if (id === 'email') setEmailError('Email is required');
      if (id === 'message') setMessageError('Message is required');
    } else {
      // Otherwise, clear corresponding error message
      if (id === 'name') setNameError('');
      if (id === 'email') setEmailError('');
      if (id === 'message') setMessageError('');
    }
  };

  // Render Contact component
  return (
    <section className="contact-section py-5" style={styles.section}>
      <h1 className="text-center mb-4" id="contact" style={styles.title}>
        Contact
      </h1>

      <div className="text-center mb-4">
        <p>Email: jasonchiu2@yahoo.com</p>
        <p>Phone: +1 (647) 761-1016</p>
      </div>

      <div className="col-12 col-md-8 mx-auto" style={styles.section}>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              onBlur={handleBlur}
              style={styles.form.input}
            />
            {nameError && <small className="text-danger">{nameError}</small>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onBlur={handleBlur}
              style={styles.form.input}
            />
            {emailError && <small className="text-danger">{emailError}</small>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              required
              onBlur={handleBlur}
              style={styles.form.input}
            ></textarea>
            {messageError && <small className="text-danger">{messageError}</small>}
          </div>
          <button type="submit" className="btn" style={styles.form.button}>
            <span style={styles.form.buttonText} mailto="jasonchiu2@yahoo.com">Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
};

// Export Contact component
export default Contact;