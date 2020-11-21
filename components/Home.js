import styles from '../styles/Home.module.css'
import { Fragment } from 'react';

export default function Home() {

    return (
        <Fragment>
            <div className={`${styles.container} container-fluid`}>
                <div>
                    <h1 className={styles.homepageheading}>
                        <div className={styles.hoverlink} id={styles.homehead1}>
                            <div>Hello.</div>
                            <span><a href="/about">About</a></span>
                        </div>
                        <div style={{ color: "red" }} className={styles.hoverlink} id={styles.homehead2}>
                            <div>I am</div>
                            <span><a href="#">Work</a></span>
                        </div>
                        <div style={{ color: "red" }} className={styles.hoverlink} id={styles.homehead3}>
                            <div>Aakash</div>
                            <span><a href="/contact">Contact</a></span>
                        </div>
                    </h1>
                </div>
                <div className={styles.tapindicaton}>Tap anywhere</div>
            </div>
        </Fragment>
    )
}