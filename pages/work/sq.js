import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Fragment } from "react";
import ProgressBar from "../../components/ProgressBar";

const SQPage = () => {
  return (
    <Fragment>
      <ProgressBar />
      <div className={`${styles.companypagecontainer} container-fluid`}>
        <div
          className={`${styles.companypageheading} ${styles.centerheading} `}
        >
          Synergy Quantum
        </div>
        <div style={{ marginBottom: "20%" }}>
          <Image
            src="/sq-mockup-desktop-3.jpeg"
            width="80vh"
            height="50vh"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={`${styles.projectcontainer}`}>
          <div className={`${styles.projectheading}`}>SQ Messenger App</div>
          <div>
            <p className={`${styles.projecttext}`}>
              A messeging application for family offices with quantum safe
              cryptography.
            </p>
          </div>
          <div className={`${styles.projectheading}`}>The Goal</div>
          <div>
            <p className={`${styles.projecttext}`}>
              The primary idea of SQ Messenger is to provide a quantum safe
              platform to its users. The SQ Platform introduces potential users
              (Administrators of different companies) to services provided by
              Synergy Quantum. Once a user has been onboarded via the Synergy
              Quantum Platform, they are given access to a dedicated Admin
              Console for their company.
            </p>
          </div>
          <div className={`${styles.projectheading}`}>My Role</div>
          <p className={`${styles.projecttext}`}>
            I have been the component lead for the flutter SQ Messenger Mobile
            Application. Developed the application from scratch and worked
            closely with other team members on implementation of the features.
          </p>
          <p className={`${styles.projecttext}`}>
            Developed UI for Quartz Web Application using React.js.
          </p>
        </div>
        <div className={`${styles.projectcontainer}`}>
          <div className={`${styles.projectheading}`}>Quartz</div>
          <div>
            <p className={`${styles.projecttext}`}>
              A web application with post quantum safe storage and
              communication.
            </p>
          </div>
          <div className={`${styles.projectheading}`}>My Role</div>
          <p className={`${styles.projecttext}`}>
            Developed User Interface for Quartz Web Application using React.js.
          </p>
          <div style={{ marginBottom: "10%", marginTop: "5%" }}>
            <Image
              src="/sq-mockup-1.png"
              width="80vh"
              height="50vh"
              layout="responsive"
              style={{ objectFit: "cover" }}
            />
            <Image
              src="/sq-mockup-2.png"
              width="80vh"
              height="50vh"
              layout="responsive"
              style={{ objectFit: "cover" }}
            />
            <Image
              src="/sq-mockup-3.png"
              width="80vh"
              height="50vh"
              layout="responsive"
              style={{ objectFit: "cover" }}
            />
            <Image
              src="/sq-mockup-4.png"
              width="80vh"
              height="50vh"
              layout="responsive"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SQPage;
