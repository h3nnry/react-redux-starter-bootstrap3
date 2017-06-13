import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-static footer-dark navbar-border">
        <p className="clearfix text-muted text-sm-center mb-0 px-2">
      <span className="float-md-left d-xs-block d-md-inline-block">Copyright  &copy; {(new Date().getFullYear())}
        <span className="text-bold-800 grey darken-2">h3nRy </span>, All rights reserved. </span>
          <span className="float-md-right d-xs-block d-md-inline-block">Hand-crafted & Made with <i className="icon-heart5 pink"></i></span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
