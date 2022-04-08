import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Logo = ({url}) => {
  return (
    <div>
      <div class={styles.logo}>
        <div class={styles.logoInner}>
          <Link
            href={url}
            className={`link`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div className={styles.logohoverlink}>
            <div style={{ cursor: "pointer", padding: "0 0 8% 2%" }}>
              aakash.
            </div>
            <span><a href="/about">aakash.works</a></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
