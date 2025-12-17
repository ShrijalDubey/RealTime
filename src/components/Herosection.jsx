import React from 'react'
import { FaRankingStar } from "react-icons/fa6";
import styles from '../styles/Herosection.module.css'
import { FaPlus } from "react-icons/fa";

export default function Herosection() {
  return (
    <div className={styles.maincont}>
        <div className={styles.heroimg}>
            <div className={styles.textdiv}>
                <div className={styles.featured}>
                    <span className={styles.features}><FaRankingStar/> Featured</span>
                    <span className={styles.features}>The Washington Post</span>
                </div>
                <div className={styles.herotitle}>They’re medics, social workers, neighbors and 911. Meet the health care workers who do it all. - The Washington Post</div>
                <div className={styles.herotext}>The Community Paramedic program in Yancey County, North Carolina, is part of a nationwide effort to reduce nonemergency calls and to close health care gaps.</div>
                <button className={styles.herobtn}><FaPlus /> Read More</button>
            </div>
        </div>
    </div>
  )
}
