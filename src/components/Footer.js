import React from 'react'
import PropTypes from 'prop-types'
import sponsor01 from '../images/devmountain.png'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
              <a href="https://www.facebook.com/groups/asumobiledevs/" className="icon fa-facebook" target = "_blank">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mobiledevs.asu/" className="icon fa-instagram" target = "_blank">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MobileDevs-ASU"
                className="icon fa-github" target = "_blank"
              >
                <span className="label">Orgsync</span>
              </a>
            </li>
            <li>
              <a
                href="https://fso.engineering.asu.edu/project/mobiledevs/"
                className="fa fa-repeat" target = "_blank"
              >
                {/* <span className="label">GitHub</span> */}
              </a>
            </li>
            <li>
              <a
                href="https://web.groupme.com/join_group/48534878/ZpONPlNx"
                className="fa fa-comment" target = "_blank"
              >
                {/* <span className="label">GitHub</span> */}
              </a>
            </li>
          </ul>
          <h4>Sponsor By:</h4>
          <img src={sponsor01} style={{ width: '200px' }} />
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
