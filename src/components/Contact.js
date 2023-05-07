import React, { useState } from 'react';

const styles = {
  section: {
    background: '#D8D174',
    color: '#465775',
  },
  title: {
    fontSize: '2.5rem',
  },
  form: {
    button: {
      fontSize: '2.5rem',
    },
    input: {
      fontSize: '2.5rem',
    },
  },
};

const Contact = () => {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;
    if (!value) {
      if (id === 'name') setNameError('Name is required');
      if (id === 'email') setEmailError('Email is required');
      if (id === 'message') setMessageError('Message is required');
    } else {
      if (id === 'name') setNameError('');
      if (id === 'email') setEmailError('');
      if (id === 'message') setMessageError('');
    }
  };

  return (
    <section className="contact-section py-5" style={styles.section}>
      <h1 className="text-center mb-4" id="contact" style={styles.title}>
        Contact
      </h1>

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
          <button type="submit" className="btn btn-primary" style={styles.form.button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;