import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import Nav from "./Nav";

export default function Works() {
  return (
    <Fragment>
      <div className={`${styles.container} container-fluid`}>
        <div>
          <span className={`${styles.worklink}`}>
            <Link
              href="/work/redbus"
              className={`link ${styles.contactlinks}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div style={{ cursor: "pointer", padding: "0 0 8% 2%" }}>
                <h1 className={`${styles.workpageheading}`}>redBus (MakeMyTrip)</h1>
                <p className={`${styles.workpagesubhead} ${styles.paragraph}`}>
                  Sep 2022 – Present, Senior Software Engineer
                </p>
              </div>
            </Link>
          </span>
          <span className={`${styles.worklink}`}>
            <Link
              href="/work/freelance"
              className={`link ${styles.contactlinks}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div style={{ cursor: "pointer", padding: "0 0 8% 2%" }}>
                <h1 className={`${styles.workpageheading}`}>Freelance</h1>
                <p className={`${styles.workpagesubhead} ${styles.paragraph}`}>
                  2021 - 2022, Selected freelance projects
                </p>
              </div>
            </Link>
          </span>
          <span className={`${styles.worklink}`}>
            <Link
              href="/work/sq"
              className={`link ${styles.contactlinks}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div style={{ cursor: "pointer", padding: "0 0 8% 2%" }}>
                <h1 className={`${styles.workpageheading}`}>Synergy Quantum</h1>
                <p className={`${styles.workpagesubhead} ${styles.paragraph}`}>
                  April 2021 - December 2021, Part-Time
                </p>
              </div>
            </Link>
          </span>
          <span className={`${styles.worklink}`}>
            <Link
              href="/work/cmt"
              className={`link ${styles.contactlinks}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div style={{ cursor: "pointer", padding: "0 0 8% 2%" }}>
                <h1 className={`${styles.workpageheading}`}>
                  Civil Machines Technologies
                </h1>
                <p className={`${styles.workpagesubhead} ${styles.paragraph}`}>
                  April 2020 - December 2020, Internship
                </p>
              </div>
            </Link>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
