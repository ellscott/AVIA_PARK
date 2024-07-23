import React from "react";
import "../css/Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const copyright = String.fromCodePoint(0x00a9);
const trademark = String.fromCodePoint(0x02122);

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="copyright">
          COPYRIGHT {copyright} AVIAPARK{trademark}
        </div>
        <ul className="contact-container">
          <li className="contact">
            <EmailIcon className="email-icon" />
            <p>email</p>
          </li>
          <li className="contact">
            <LocalPhoneIcon />
            <p>+60124808247</p>
          </li>
          <li className="contact">
            <InstagramIcon />
            <p>@megathaq</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Footer;
