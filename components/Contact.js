import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin, faGithub,

} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Contact() {

    return (
        <div className={`${styles.container} container-fluid`}>
            <div
                style={{
                    minHeight: "50vh"
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
                    <p>I'm seeking out opportunities to collaborate with companies
                        / agencies / individuals, not just work for them. I want to
                        bring my collective experience to the table where we can work together to solve real
                        problems in a way that optimizes all of our respective experience and knowledge.
                    </p>
                    <p>
                        I want to favour open-minded collaborators where egos are out of the equation.
                        If that sounds about right, then lets for sure chat about how we can work together.
                    </p>
                    <p>
                        Feel free to reach me out through any of the platforms below:
                    </p>
                    <div className={styles.links}>
                        <span className={styles.contactlinks}>
                            <span><FontAwesomeIcon icon={faEnvelope} size="1x" style={{ display: "inline" }} /></span>
                            <a href="mailto:akhsri21@gmail.com" className="link"
                                style={{
                                    textDecoration: "none",
                                    color: "red",
                                    padding: "0 20% 0 2%"
                                }}
                            >

                                Gmail
                            </a>
                        </span>
                        <span style={{ display: "block" }} className={styles.contactlinks}>
                            <span><FontAwesomeIcon icon={faInstagram} size="1x" style={{ display: "inline" }} /></span>
                            <span>
                                <a href="https://www.instagram.com/aakaaashhhh_/" className="link"
                                    style={{
                                        textDecoration: "none",
                                        color: "red",
                                        padding: "0 20% 0 2%"
                                    }}
                                >
                                    Instagram
                                </a>
                            </span>
                        </span>
                        <span className={styles.contactlinks}>
                            <FontAwesomeIcon icon={faLinkedin} size="1x" />
                            <a href="https://www.linkedin.com/in/aakash-srivastav-958a5716a/" className="link"
                                style={{
                                    textDecoration: "none",
                                    color: "red",
                                    padding: "0 20% 0 2%"
                                }}
                            >
                                Linkedin
                    </a>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    )
}