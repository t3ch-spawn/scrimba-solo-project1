import TwitterIcon from "../images/Twitter Icon.svg";
import FacebookIcon from "../images/Facebook Icon.svg";
import GitHubIcon from "../images/GitHub Icon.svg";
import InstagramIcon from "../images/Instagram Icon.svg";
import LinkedinIcon from "../images/Linkedin-footer-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list footer__list--2">
        <li className="footer__items">
          <img src={TwitterIcon} alt="" />
        </li>
        <li className="footer__items">
          {" "}
          <img src={FacebookIcon} alt="" />
        </li>
        <li className="footer__items">
          {" "}
          <img src={InstagramIcon} alt="" />
        </li>
        <li className="footer__items">
          {" "}
          <img src={LinkedinIcon} alt="" />
        </li>
        <li className="footer__items">
          {" "}
          <img src={GitHubIcon} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
