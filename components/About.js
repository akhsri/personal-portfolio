import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Nav from "./Nav";

export default function About() {
  return (
    <Fragment>
      <div className={`${styles.container} container-fluid`}>
        <div
          style={{
            minHeight: "50vh",
          }}
        >
          <h2 className={styles.heading}>
            <div>I design & build</div>
            <div>digital products</div>
          </h2>
        </div>
        <div>
          <h4 className={styles.subheading}>About</h4>
          <span className={styles.paragraph}>
            <p>
              Hi, I'm Aakash. I am a full stack stack developer. I enjoy
              collaborating within and across teams. I write clean, maintainable
              code and build scalable products. I prefer to keep learning,
              continue challenging myself, and do interseting things that
              matter.{" "}
            </p>
            <p>
              Here are a few technologies I've been working with recently:
              <div className="row">
                <div className="skill col-6 col-md-3">
                  <ul style={{ paddingLeft: "10%" }}>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <ul style={{ paddingLeft: "10%" }}>
                    <li>Express.js</li>
                    <li>Nest.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </p>
            <span className={styles.contactlinks}>
              <a
                href="https://drive.google.com/file/d/1TU0Zt6_8VZmoYUpiNKguPQBPYRELxTOg/view?usp=sharing"
                target="_blank"
                className="link"
                style={{
                  textDecoration: "none",
                  color: "red",
                }}
              >
                My Resume
              </a>
            </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
