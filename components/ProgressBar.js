import React, {useState, useEffect} from "react";
import { LinearProgress } from "@material-ui/core";
import styles from "../styles/Home.module.css";

const ProgressBar = () => {
    
    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight * 100}`;
    
            setScroll(scroll);
        }
    
        window.addEventListener("scroll", progressBarHandler);
    
        return () => window.removeEventListener("scroll", progressBarHandler);
    });
  return (
    <div style={{ position: "absolute" }} className={styles.progressBar}>
      <LinearProgress
        variant="determinate"
        value={scroll}
        color="secondary"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: "100", backgroundColor: "white !important" }}
      />
    </div>
  );
};

export default ProgressBar;
