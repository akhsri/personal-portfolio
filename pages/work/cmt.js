import styles from "../../styles/Home.module.css";
import Image from "next/image";

const CmtPage = () => {
  return (
    <div className={`${styles.companypagecontainer} container-fluid`}>
      <div
        className={`${styles.companypageheading} ${styles.centerheading} `}
        style={{ marginTop: "-5%" }}
      >
        Civil Machines Technologies
      </div>
      <div style={{ marginBottom: "20%", marginTop: "-5%" }}>
        <Image
          src="/sweet2th-mocup-3.jpeg"
          width="80vh"
          height="50vh"
          layout="responsive"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`${styles.projectcontainer}`}>
        <div className={`${styles.projectheading}`}>Sweet2th</div>
        <div>
          <p
            style={{
              fontSize: "x-large",
              fontFamily: "Regular",
              color: "#000000",
            }}
          >
            A FoodTech product based out in India aggregating Vendors, Home
            Bakers, Delivery Partners, and Consumers.
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
              Sweet2th Website
            </h1>
          </a>

          <div className={`${styles.projectheading}`}>My Role</div>
          <p className={`${styles.projecttext}`}>
            Worked as a Frontend Developer on Sweet2th Consumer, Sweet2th
            Vendor and Sweet2th Customer Order Management Dashboard web
            applications built in React.js.
          </p>
          <p className={`${styles.projecttext}`}>
            Created User Interface and implemented new features. Other
            responsibilities included bug tracking and bug fixing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CmtPage;
