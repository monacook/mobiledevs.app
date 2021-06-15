import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-mobile"></span>
        </div>
        <div className="content">
            <div className="inner">
            <h1>Welcome!</h1>
            <h2>Learn. Build. Deploy.</h2>
            <p>A student club organization learning all things mobile at Arizona State University.</p>                 
            <h3 style={{color:"red"}}>**Due to COVID-19, we are still having workshops virtual until further notice.**</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('meeting')}}>Meetings</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('sponsor')}}>Sponsors</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Join MobileDevs!</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
