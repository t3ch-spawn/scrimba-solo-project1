import TwitterIcon from "../images/Twitter Icon.svg";
import FacebookIcon from "../images/Facebook Icon.svg";
import GitHubIcon from "../images/GitHub Icon.svg";
import InstagramIcon from "../images/Instagram Icon.svg";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__items">
          <a href="https://twitter.com/t3ch_spawn?t=-chsN0uFiHaSVcKx_kBIIQ&s=09">
            <img src={TwitterIcon} alt="" />
          </a>
        </li>
        <li className="footer__items">
          <a href="">
            {" "}
            <img src={FacebookIcon} alt="" />
          </a>
        </li>
        <li className="footer__items">
          <a href="https://www.instagram.com/t3ch_spawn/">
            <img src={InstagramIcon} alt="" />
          </a>
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
