import React from 'react'
import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
              <a href="https://www.facebook.com/groups/asumobiledevs/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mobiledevs.asu/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MobileDevs-ASU"
                className="icon fa-github"
              >
                <span className="label">github</span>
              </a>
            </li>
            <li>
              <a
                href="https://fso.engineering.asu.edu/project/mobiledevs/"
                className="fa fa-repeat" 
              >
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/a3ZBPVjxbV"
                className="fa fa-comments-o"
              >
              </a>
            </li>    
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
