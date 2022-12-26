import MailIcon from "../images/Mail.svg";
import LinkedinIcon from "../images/linkedin.svg";
import AvatarPic from "../images/Rectangle 90.png";

function info_2() {
  return (
    <div className="info info-2">
      <div className="info__avatar">
        <img src={AvatarPic} alt="" />
      </div>
      <div className="info__details">
        <h3 className="info__name">Laura Smith</h3>
        <p>Frontend Developer</p>
        <a href="#" className="info__link">
          laurasmith.website
        </a>
      </div>
      <div className="info__buttons">
        <button className="info__buttons--email-2">
          <img src={MailIcon} alt="" />
          <p>Email</p>
        </button>
      </div>
    </div>
  );
}

export default info_2;
