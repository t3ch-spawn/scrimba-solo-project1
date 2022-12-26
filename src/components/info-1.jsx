import MailIcon from "../images/Mail.svg";
import LinkedinIcon from "../images/linkedin.svg";
import AvatarPic from "../images/Rectangle-90.jpg";

function info_1() {
  return (
    <div className="info info-1">
      <div className="info__avatar">
        <img src={AvatarPic} alt="" />
      </div>
      <div className="info__details">
        <h3 className="info__name">Boluwatife Olusanya</h3>
        <p>Frontend Developer</p>
        <a href="https://github.com/gLitCH1904" className="info__link">
          https://github.com/gLitCH1904
        </a>
      </div>
      <div className="info__buttons">
        <a
          href="mailto: boluwatife1904@gmail.com"
          className="info__buttons__link"
        >
          <button
            className="info__buttons--email"
            href="mailto: boluwatife1904@gmail.com"
          >
            <img src={MailIcon} alt="" />
            <p>Email</p>
          </button>
        </a>
        <button className="info__buttons--linkedin">
          <img src={LinkedinIcon} alt="" />
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}

export default info_1;
