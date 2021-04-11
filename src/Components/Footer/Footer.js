import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        Developed By - &nbsp;
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mohitvkulkarni/"
          target="_blank"
        >
          <span className="creditsName">Mohit Kulkarni</span>
        </a>{" "}
        &nbsp; and &nbsp;
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rahulmehra12"
          target="_blank"
        >
          <span className="creditsName">Rahul Mehra</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
