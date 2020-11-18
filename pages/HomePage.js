import styles from '../styles/Home.module.css'

export default function HomePage() {

    return (
        <div className={`${styles.container} container-fluid`}>
            <div>
                <h1 className={styles.homepageheading}>
                    <div className={styles.hoverlink}>
                        <div>Hello.</div>
                        <span><a href="#">About</a></span>
                    </div>
                    <div style={{ color: "red" }} className={styles.hoverlink}>
                        <div>I am</div>
                        <span><a href="#">Work</a></span>
                    </div>
                    <div style={{ color: "red" }} className={styles.hoverlink}>
                        <div>Aakash</div>
                        <span><a href="#">Contact</a></span>
                    </div>
                </h1>
            </div>
        </div>
    )
}