import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
    <footer className="footer">
        
        <p className="footer__copyright dark-white">
            Made with <span>❤</span> by{' '}
            <a href="https://www.binbuda.io" target="_blank" rel="noopener noreferrer">
                Binbuda
            </a>
            <a
                href="https://twitter.com/dockerexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
            >
                Twitter
            </a>
            <a
                href="https://rave.flutterwave.com/donate/bavfmdlomzs2"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
            >
                Donate
            </a>
        </p>
        <p className="footer__copyright dark-white thank-you">
            <span className="footer__link">
                The project was forked from <a href="https://github.com/binbuda/dockerexplorer" rel="noopener noreferrer" target="_blank">GIT Explorer</a>
            </span>
            <span className="footer__link">
                Source <a href="https://docker.com" rel="noopener noreferrer" target="_blank">Docker.com</a>
            </span>
        </p>
        <div className="logo">
            <a href="https://github.com/binbuda/dockerexplorer" rel="noopener noreferrer" target="_blank">
                {props.dark ? (
                    <img src={githubGreen} alt="Github Logo" className="logo--github" />
                ) : (
                    <img src={github} alt="Github Logo" className="logo--github" />
                )}
            </a>
        </div>
    </footer>
);

Footer.propTypes = {
    dark: PropTypes.bool
};

export { Footer };
