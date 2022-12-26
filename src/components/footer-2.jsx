import TwitterIcon from "../images/Twitter Icon.svg";
import FacebookIcon from "../images/Facebook Icon.svg";
import GitHubIcon from "../images/GitHub Icon.svg";
import InstagramIcon from "../images/Instagram Icon.svg";
import LinkedinIcon from "../images/Linkedin-footer-icon.svg";

function Footer() {
  return (
    <div className="footer footer--2">
      <ul className="footer__list footer__list--2">
        <li className="footer__items">
          <a href="https://twitter.com/t3ch_spawn?t=-chsN0uFiHaSVcKx_kBIIQ&s=09">
            <img src={TwitterIcon} alt="" />
          </a>
        </li>
        <li className="footer__items">
          <img src={FacebookIcon} alt="" />
        </li>
        <li className="footer__items">
          <a href="https://www.instagram.com/t3ch_spawn/">
            <img src={InstagramIcon} alt="" />
          </a>
        </li>
        <li className="footer__items">
          <img src={LinkedinIcon} alt="" />
        </li>
        <li className="footer__items">
          <a href="https://github.com/gLitCH1904">
            <img src={GitHubIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
