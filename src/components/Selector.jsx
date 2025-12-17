import React from 'react'
import styles from '../styles/Selector.module.css'
import { FaNewspaper,FaArrowTrendUp,FaMicrochip } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { MdOutlineSportsBasketball, MdScience  } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoTrendingDownSharp } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";

export default function Selector() {
  return (
    <div className={styles.maincont}>
      <button className={styles.selbtn}><FaNewspaper /> Latest</button>
      <button className={styles.selbtn}><FaArrowTrendUp/> Trending</button>
      <button className={styles.selbtn}><FaMicrochip/> Technology</button>
      <button className={styles.selbtn}><GoLaw /> Politics</button>
      <button className={styles.selbtn}><MdOutlineSportsBasketball /> Sports</button>
      <button className={styles.selbtn}>< MdScience /> Science</button>
      <button className={styles.selbtn}><FaBook/> Education</button>
      <button className={styles.selbtn}><IoTrendingDownSharp /> Buisness</button>
      <button className={styles.selbtn}><GiHealthNormal /> Health</button>
    </div>
  )
}
