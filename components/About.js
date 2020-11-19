import styles from '../styles/Home.module.css'
import { Fragment } from "react"
import Nav from "./Nav"

export default function About() {

    return (
        <Fragment>
            <div className={`${styles.container} container-fluid`}>
                <div
                    style={{
                        minHeight: "50vh"
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
                        <p>Hi, I'm Aakash. I am a MERN stack developer. I have experience working with a startup. I write clean and maintaiable code.  </p>
                        <p>
                            I don't like to define myself by the work I have done.
                             I define myself by the work I want to do. Skills can be taught,
                            personality is inherent. I prefer to keep learning, continue challenging myself,
                            and do interseting things that matter.
                    </p>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}