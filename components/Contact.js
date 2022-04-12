import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <div
        style={{
          minHeight: "50vh",
        }}
      >
        <h2 className={styles.headingcontact}>
          <div>Let's make</div>
          <div>something great!</div>
        </h2>
      </div>
      <div>
        <h4 className={styles.subheading}>Contact</h4>
        <span className={styles.paragraph}>
          <p>
            I'm seeking out opportunities to collaborate with companies or
            individuals. I have experience working with startups and I want to
            bring my collective experience to the table where we can work
            together to solve real problems in a way that optimizes all of our
            respective experience and knowledge. Let's chat about how we can work
            together.
          </p>
          <p>Find me on any of the platforms below:</p>
          <div className={styles.links}>
            <span className={styles.contactlinks}>
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  style={{ display: "inline" }}
                />
              </span>
              <a
                href="mailto:akhsri21@gmail.com"
                className="link"
                style={{
                  textDecoration: "none",
                  color: "red",
                  padding: "0 20% 0 2%",
                }}
              >
                Gmail
              </a>
            </span>
            {/* <span style={{ display: "block" }} className={styles.contactlinks}>
              <span>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  style={{ display: "inline" }}
                />
              </span>
              <span>
                <a
                  href="https://www.instagram.com/aakaaashhhh_/"
                  target="_blank"
                  className="link"
                  style={{
                    textDecoration: "none",
                    color: "red",
                    padding: "0 20% 0 2%",
                  }}
                >
                  Instagram
                </a>
              </span>
            </span> */}
            <span style={{ display: "block" }} className={styles.contactlinks}>
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
              <a
                href="https://www.linkedin.com/in/aakash-srivastav-958a5716a/"
                target="_blank"
                className="link"
                style={{
                  textDecoration: "none",
                  color: "red",
                  padding: "0 20% 0 2%",
                }}
              >
                Linkedin
              </a>
            </span>
            <span style={{ display: "block" }} className={styles.contactlinks}>
              <FontAwesomeIcon icon={faGithub} size="1x" />
              <a
                href="https://github.com/akhsri"
                target="_blank"
                className="link"
                style={{
                  textDecoration: "none",
                  color: "red",
                  padding: "0 20% 0 2%",
                }}
              >
                GitHub
              </a>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
