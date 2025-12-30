import React from "react";
import styles from "../styles/Navbar.module.css";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.maincont}>
      <div className={styles.leftnav}>RealTime</div>

      <div className={styles.rightnav}>
        <button className={styles.modebtn}>
          <MdDarkMode />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
