import React from "react";
import { Grid, GridCol } from "./generic/generalfunctions";
import "./styles/footer.css";
import fb from "./images/facebook.svg";
import youtube from "./images/youtube.png";
import insta from "./images/instagram.svg";
import phone from "./images/phone-call.png";
import mail from "./images/mail.png";
export default class Footer extends React.Component {
  render() {
    return (
      <Grid additionalclass="footer">
        <GridCol total="3">
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Returns & Exchange</li>
            <li>Technical & Privacy</li>
            <li>Order Status</li>
          </ul>
        </GridCol>
        <GridCol total="3">
          <div className="redbuton">MADE UP</div>
          <div className="staytouch">Stay in touch with us</div>
          <div>
            <img src={fb} alt="fb" className="footicons" />
            <img src={insta} alt="fb" className="footicons" />
            <img src={youtube} alt="fb" className="footicons" />
          </div>
        </GridCol>
        <GridCol total="3">
          <div className="address">
            <p className="addhead">Our Corporate Office</p>
            <p>No: 7,A2B road, Adayar Rajapuram,</p>
            <p>T-Nagar, Chennai - 642002</p>
          </div>
          <div className="contact">
            <span>
              <img src={mail} alt="mail" />
            </span>
            <span>sales@madeup.com</span>
            <br />
            <span>
              <img src={phone} alt="alt" />
            </span>
            <span>044 9999 9999</span>
          </div>
        </GridCol>
      </Grid>
    );
  }
}
