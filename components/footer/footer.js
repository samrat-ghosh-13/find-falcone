// react
import React from "react";

const Footer = () => {
  return (
    <article>
      <footer className="app__footer" data-testid="app__footer">
        <div className="app__footer__contents" data-testid="app__footer__contents">
          Made with <span className="app__footer__contents__logo">❤️</span> by
          <a
            href="https://www.linkedin.com/in/samratat/"
            target="_blank"
            rel="noreferrer"
          >
            Samrat Ghosh
          </a>
          © 2021
        </div>
      </footer>
    </article>
  );
};

export default Footer;
