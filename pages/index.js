import React, { useState } from "react"
import Head from 'next/head'
import { Tabs, Tab, AppBar } from "@material-ui/core"
import HomePage from "./HomePage"
import About from "./About"
import Contact from "./Contact"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }
  return (
    <div >
      <AppBar style={{ backgroundColor: "black" }}>

        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <HomePage />}
      {selectedTab === 1 && <About />}
      {selectedTab === 2 && <Contact />}
    </div>
  )
}
