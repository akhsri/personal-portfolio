import styles from '../styles/Home.module.css'
import { Fragment } from "react"
import Nav from "../components/Nav"
import About from "../components/About"

export default function AboutPage() {

    return (
        <Fragment>
            <Nav />
            <About />
        </Fragment>
    )
}