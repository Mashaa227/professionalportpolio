import { FaGithub, FaLinkedin, FaGlobe, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">MB</div>

          <div>
            <h3>Mashak Balaganoor</h3>
            <p>Java Backend Developer</p>
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://linkedin.com/in/mashaa8816"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Mashaa227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://mashaa227.github.io/professionalportpolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 Mashak Balaganoor. All rights reserved.</p>

        <p>
          Designed & Developed by Mashak Balaganoor{" "}
          <FaHeart className="heart" />
          {/* Java Backend Developer | Spring Boot | Kafka | Docker | OpenShift |
          React */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
