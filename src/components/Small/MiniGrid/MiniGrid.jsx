import React from 'react'
import  styles from './MiniGrid.module.css'
const MiniGrid = ({title,img}) => {
  return (
    <div className={styles.MiniGrid}>
        <div className={styles.miniContainer}>
            <div className={styles.iconConatiner}>
                <img src={img}></img>
            </div>
            <div className={styles.txt}>
                {title} 
            </div>
        </div>
    </div>
  )
}

export default MiniGrid