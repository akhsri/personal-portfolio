import styles from '../../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin, faGithub,

} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { Fragment } from 'react';
import Nav from "../../components/Nav"
import Contact from "../../components/Contact"
import Works from '../../components/Works';

export default function WorksPage() {

    return (
        <Fragment>
            <Nav />
            <Works/>
        </Fragment>
    )
}