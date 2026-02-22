import styles from "../../styles/Home.module.css";
import { Fragment } from "react";
import ProgressBar from "../../components/ProgressBar";
import Logo from "../../components/Logo";

const RedbusPage = () => {
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
          redBus (MakeMyTrip)
          <p
            style={{
              color: "grey",
              fontSize: "20px",
              fontWeight: "300",
            }}
          >
            Bangalore, India · Hybrid · Sep 2022 – Present
          </p>
        </div>
        <div className={`${styles.projectcontainer}`}>
          <div className={`${styles.projectheading}`}>Key contributions</div>
          <ul className={`${styles.projecttext}`} style={{ paddingLeft: "1.2em" }}>
            <li>
              Built Observability and Evaluation Dashboard for Agentic Systems powered by Google ADK, providing real-time monitoring, performance analytics, and conversation insights for AI agents.
            </li>
            <li>
              Developed Redpay SDK using TypeScript, Vite, and Nx monorepo architecture to streamline payment integration across 4+ business verticals (Bus, Rail, Ferry, Things to Do), significantly reducing development time and accelerating time-to-market for multiple lines of business.
            </li>
            <li>
              Built an in-house User Session Recording library, enabling product teams to analyse user behaviors and feature impacts by playing back their activity recordings like hotjar and clarity.
            </li>
            <li>
              Revamped bus booking funnel with an approach to bring key steps together, eliminating page navigation, reducing context switching, clicks, waiting time and page loads, elevating user experience and increasing CR for Search Results page to Payment page by 2%.
            </li>
            <li>
              Implemented SSR and Redis HTML caching and API caching for Redbus' Search Result Page, reducing load time.
            </li>
            <li>
              Implemented performance improvements - CWV for various pages in the redBus mobile web funnel. Improving Lighthouse scores by 30%.
            </li>
            <li>
              Crafted Xplore: an injectable interface, deployable script in any codebase, elevating user engagement for discovering nearby attractions, restaurants, and shopping at destination cities. Led end-to-end development, including API creation, backend data caching, and frontend creation from scratch.
            </li>
            <li>
              Contributed to the development of various features in the redRail mobile web funnel leveraging React, Redux, Express, Mongo, and Scss.
            </li>
            <li>
              Developed various reusable components in the Common Component Library, leveraging Storybook.
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default RedbusPage;
