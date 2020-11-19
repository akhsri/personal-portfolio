import React, { useState, Fragment } from "react"
import Head from 'next/head'
import { Tabs, Tab, AppBar } from "@material-ui/core"
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "./about"
import Contact from "./contact"
import styles from '../styles/Home.module.css'

export default function HomePage() {

  return (
    <Fragment>
      <Nav />
      <Home />
    </Fragment>
  )
}
