import FB from "/assets/images/facebook-logo.png"
import Insta from "/assets/images/instagram-logo.png"
import LinkedIn from "/assets/images/linkedin-logo.png"

export default function Footer () {
  return (
    <footer>
      <div className="footer-divs">
        <div className="footer-images">
          <a href="https://www.facebook.com/SDEG77/" target="_blank">
            <img src={FB} alt="logo of Facebook" />
          </a>
          <img src={Insta} alt="logo of Instgram" />
          
          <a href="https://www.linkedin.com/in/sigrae-derf-gabriel-5762bb2a4/" target="_blank">
            <img src={LinkedIn} alt="logo of LinkedIn" />      
          </a>
        </div>

        <div className="footer-border"></div>
        {/* <div className="contact">
          <div className="footer-border"></div>
          <a className="contact-link" href="contact.php">Contact Me</a>
          <div className="footer-border"></div>
        </div> */}
        <p className="footer-email">sies.gabriel.au@phinamed.com</p>
      </div>
    </footer>
  ) 
}