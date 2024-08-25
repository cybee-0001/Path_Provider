import insta from "../../../assets/icons/social/instagram.svg";
import discord from "../../../assets/icons/social/discord.svg";
import fb from "../../../assets/icons/social/facebook.svg";
import lin from "../../../assets/icons/social/linkedin.svg";
import tele from "../../../assets/icons/social/telegram.svg";
import x from "../../../assets/icons/social/x.svg";
import yt from "../../../assets/icons/social/youtube.svg";
import mail from "../../../assets/icons/social/mail.svg";
import logo from "../../../assets/images/Home_Page/Logo/logo.png";

import "./style.css";
const FooterSection = () => {
  return (
    <footer className="footerSection">
      <div className="upperDiv">
        <h2>
          What are you waiting for? <br />
          Start your journey today!
        </h2>

        <button className="largeBtn">Get Started</button>
      </div>

      <div className="underDiv">
        <div className="leftDiv">
          <div className="logo">
            <img src={logo} alt="Logo" />
            Avigayan
          </div>
        </div>

        <div className=" middleDiv">
          <h3>Follow Us</h3>

          <aside>
            <div className="social">
              <div>
                {" "}
                <span>Discord</span>
                <img src={discord} alt="" />
              </div>
              <div>
                {" "}
                <span>Youtube</span> <img src={yt} alt="" />
              </div>
              <div>
                {" "}
                <span>Telegram</span> <img src={tele} alt="" />
              </div>
            </div>
            <div className="social">
              <div>
                {" "}
                <span>Instagram</span> <img src={insta} alt="" />
              </div>
              <div>
                {" "}
                <span>FaceBook</span> <img src={fb} alt="" />
              </div>
              <div>
                {" "}
                <span>X</span> <img src={x} alt="" />
              </div>
              <div>
                {" "}
                <span>Linkedin</span> <img src={lin} alt="" />
              </div>
            </div>
          </aside>
        </div>

        <div className="rightDiv">
          <h3>Get In Touch</h3>
          <p>
            <img src={mail} alt="" />
            avigayan@help.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
