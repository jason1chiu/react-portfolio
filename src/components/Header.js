import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <section className="row p-3">
      <section className="col-12">
        <h1 className="text-center">Jason Chiu</h1>
      </section>
      <section className="col-12">
        <Navigation />
      </section>
    </section>
  );
};

export default Header;
