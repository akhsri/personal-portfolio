import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Fragment } from "react";
import ProgressBar from "../../components/ProgressBar";
import Logo from "../../components/Logo";

const FreelancePage = () => {
  return (
    <Fragment>
      <ProgressBar />
      <div>
        <Logo url={"/work"} />
      </div>
      <div className={`${styles.companypagecontainer} container-fluid`}>
        <div
          className={`${styles.companypageheading} ${styles.centerheading} `}
        >
          Freelance
          <p
            style={{
              color: "grey",
              fontSize: "20px",
              fontWeight: "300",
            }}
          >
            Selected freelance projects
          </p>
        </div>
        <div style={{ marginBottom: "20%" }}>
          <Image
            src="/pw-mockup-2.jpeg"
            width="80vh"
            height="50vh"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className={`${styles.projectcontainer}`}>
            <div className={`${styles.projectheading}`}>BDGPS</div>
            <div>
              <p
                style={{
                  fontSize: "x-large",
                  fontFamily: "Regular",
                  color: "#000000",
                }}
              >
                A security company management web application. Key fetures -
                <br />
                - Seamlessly schedule guards to different sites according to
                their availability and unavailability.
                <br />
                - Get digital reports from your guards, such as shift summaries
                or incident reports.
                <br />
                - Onboard new and existing guards.
                <br />
                - Create/Update recurring shifts.
                <br />- View all weekly shifts in a grid view to have better
                insights of the shifts.
              </p>
              <a
                href="https://sweet2th.app/"
                target="_blank"
                className={`link ${styles.contactlinks}`}
                style={{
                  textDecoration: "none !important",
                  color: "#000000",
                }}
              >
                <h1
                  className={`${styles.contactlinks}`}
                  style={{
                    textDecoration: "none",
                    color: "red",
                    fontSize: "19px",
                  }}
                >
                  BDGPS Website
                </h1>
              </a>
              <div style={{ marginBottom: "10%" }}>
                <Image
                  src="/bdg-mockup-2.png"
                  width="80vh"
                  height="50vh"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                />
                <Image
                  src="/bdg-mockup-1.png"
                  width="80vh"
                  height="50vh"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={`${styles.projectheading}`}>My Role</div>
              <p className={`${styles.projecttext}`}>
                Worked as a Fullstack developer. Created server side application
                for REST API with documentation (Swagger.io) support. Developed
                the sites, shift scheduling and grid-view features on the
                frontend side using Angular.js.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={`${styles.projectcontainer}`}>
            <div className={`${styles.projectheading}`}>Poetry World</div>
            <div>
              <p
                style={{
                  fontSize: "x-large",
                  fontFamily: "Regular",
                  color: "#000000",
                }}
              >
                Web application to manage authors, books, sales and distribution
                for publication houses.
              </p>
              <a
                href="https://sweet2th.app/"
                target="_blank"
                className={`link ${styles.contactlinks}`}
                style={{
                  textDecoration: "none !important",
                  color: "#000000",
                }}
              >
                <h1
                  className={`${styles.contactlinks}`}
                  style={{
                    textDecoration: "none",
                    color: "red",
                    fontSize: "19px",
                  }}
                >
                  Poetry-World Website
                </h1>
              </a>
              <div style={{ marginBottom: "10%", marginTop: "5%" }}>
                <Image
                  src="/pw-mockup-6.png"
                  width="80vh"
                  height="50vh"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                />
                <Image
                  src="/pw-mockup-7.png"
                  width="80vh"
                  height="50vh"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                />
                <Image
                  src="/pw-mockup-8.png"
                  width="80vh"
                  height="50vh"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={`${styles.projectheading}`}>My Role</div>
              <p className={`${styles.projecttext}`}>
                Worked as a Fullstack developer. Created server side application
                for REST API using Nest.js and PostgreSQL single handedly from
                scratch. Created Admin Dashboard web application using React.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FreelancePage;
