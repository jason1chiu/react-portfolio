import React from 'react';
import thesis from '../assets/links/Chiu_Thesis.pdf';

const Thesis = () => {
  return (
    <section className="thesis-section">
      <h1 className="text-center" id="thesis">
        Thesis
      </h1>
      <div className="text-center">
        <button type="button" className="btn btn-light btn-link">
          <a className="text-black" href={thesis} download>
            Download Thesis
          </a>
        </button>
      </div>
    </section>
  );
};

export default Thesis;