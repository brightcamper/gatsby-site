import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
export default function Home() {
  return(
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Software</h2>
          <h3>Design</h3>
          <p>A software and design studio</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="banner" style={{ maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}