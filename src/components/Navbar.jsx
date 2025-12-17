import React from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/Navbar.module.css'
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.maincont}>
        <div className={styles.leftnav}>RealTime</div>
        <div className={styles.rightnav}>
          <div className={styles.searchbar}>
            <button className={styles.navbtn}><FaSearch/></button>
            <input className={styles.navinput} type="text" placeholder='Search news...'/>
          </div>
            <button className={styles.modebtn}><MdDarkMode/></button>
        </div>
    </div>
  )
}

export default Navbar
