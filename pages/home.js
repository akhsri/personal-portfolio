import styles from '../styles/Home.module.css'
import { Fragment } from 'react';
import Nav from "../components/Nav"
import Home from "../components/Home"

export default function HomePage() {

    return (
        <Fragment>
            <Nav />
            <Home />
        </Fragment>
    )
}