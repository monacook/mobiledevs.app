import PropTypes from 'prop-types'
import React from 'react'
import Button from '@material-ui/core/Button'
import pdf from '../pdf/Sponsor_Packet.pdf'
import pic02 from '../images/meeting01.jpg'

class Main extends React.Component {
  
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
  
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <h2 className="major">About</h2>
          <p>
          <b>We</b> are a student organization at Arizona State University that provides a community with the necessary resources to support 
          <b> aspiring</b> mobile developers in their aim to progress their technical skills, further themselves professionally, 
          and collaborate amongst others to bring ideas to life.
          </p>
          {close}
        </article>

        <article
          id="meeting"
          className={`${this.props.article === 'meeting' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Meetings</h2>
          {/* <span  className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>Meeting dates, time and location may change throughout the semester. We will do our best to 
            update any info before the meeting. If the email and website do not match, please refer to the email for 
            correct i nformation regarding the next meeting.
          </p>
          <span className="image main">
          <h4 className="major">Jan 29th, 2020</h4>
          <b>AR Workshop</b>
           <p>Join us for our AR workshop with Aashiq Shaikh. We will be going over the current state of AR.
          <p>Location: MU 246
            <p>Time: 8 - 9:30pm 
            </p>
            </p>
          </p>
          <Button variant="outlined" color="inherit" href="https://github.com/shikshake/Workshop-Game" target="_blank">Github</Button>
          </span>
          <span className="image main">
          <h4 className="major">Feb 12th, 2020</h4>
          <b>IOS Workshop</b>
          <p>Join us will be Perry Waxman! He will be leading an IOS workshop. Make sure to have a mac and Xcode downloaded. 
          <p>Location: MU 246
            <p>Time: 8 - 9:30pm
            </p>
            </p>
          </p>
          <Button variant="outlined" color="inherit" href="https://forms.gle/uGCSvsv9LugYFfz68" target = "_blank">RVSP</Button>
          </span>
          {close}
        </article>

        <article
          id="sponsor"
          className={`${this.props.article === 'sponsor' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sponsor</h2>
          <span className="image main">
            <img src={pic02} style={{ maxwidth: 500 }} alt=""/>
          </span>
          <p>
            Sponsoring our organization will allow us to continue attracting individuals who aspire to become mobile
            developers. That to us is impactful, and provides us with the leverage to continue bringing value. </p>
            <p> MobileDevs’ mission of preparing members for a successful career in mobile 
          development is in large part accomplished through Industry involvement. If your
          company would be interested in partnering with MobileDevs and building a lasting partnership, 
          please feel free to reach out to us. Below we have attached our sponsor packet for more details. 
          </p>
          <p>Interested in becoming a sponsor? To learn more click the Sponsor Packet. 
            You'll see our sponsor packet with full detail of what we offer. 
            Fill out the form including a quick description and the company you are working with. 
            Our Director of Marketing will reach back to you shortly. 
            We look forward to working and collaborating with you in the future!
          </p>
              <Button variant="outlined" color="inherit" href="https://forms.gle/6iyzMctsyXh5GL3F6" target = "_blank" style = {{ margin: 10 }}>Sponsor Form</Button> 
              <Button variant="outlined" color="inherit" href={pdf} target = "_blank">Sponsor Packet</Button>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">MobileDev Members</h2>
          <span className="image main">
            {/* <img src={pic04} alt="" /> */}
          </span>
          <p>Interested in Mobile development or just want to check it out? Do you have coding experience? You don't have to!
          If you are interested in learning all things mobile, why should we stop you from learning? Sign up and come learn with us! 
          If you have an idea for a mobile app, we have a workshop for that! If you are interested in Android, IOS or even AR or VR, 
          we have a workshop for that! We also have fantastic relationships with our host who share their experience in the mobile development
          world. 
          </p>
          <p>We find creative ways to make each workshop fun, and interesting for all that are experienced and not experienced.
            Click to fill out the form! Once signed up, your email will automatically be on our email list to receive updates on our 
            meetings and events for the semester. What are you waiting for? We hope to see you there!
          </p>
          <p>To get more information and detail on our meetings and what is to come, follow us on our social media!</p>
          <Button variant="outlined" color="inherit" href="https://forms.gle/xF45onZyKphdatmP6" target = "_blank">Be A Member!</Button>
          {close}
        </article>
      </div>
    )
  }
}

Main.PropTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
