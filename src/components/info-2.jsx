import MailIcon from "../images/Mail.svg";
import AvatarPic from "../images/Rectangle-90.jpg";

function info_2() {
  return (
    <div className="info info-2">
      <div className="info__avatar">
        <img src={AvatarPic} alt="" />
      </div>
      <div className="info__details info__details--2">
        <h3 className="info__name info__name--2">Boluwatife Olusanya</h3>
        <p>Frontend Developer</p>
        <a
          href="https://github.com/gLitCH1904"
          className="info__link info__link--2"
        >
          https://github.com/gLitCH1904
        </a>
      </div>
      <div className="info__buttons">
        <a
          href="mailto: boluwatife1904@gmail.com"
          className="info__buttons__link info__buttons__link-2"
        >
          <button className="info__buttons--email-2">
            <img src={MailIcon} alt="" />
            <p>Email</p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default info_2;
