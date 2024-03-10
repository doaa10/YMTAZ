import React from 'react'
import  styles from './MiniGrid.module.css'
import Image from 'next/image'
const MiniGrid = ({title,img}) => {
  return (
    <div className={styles.MiniGrid}>
        <div className={styles.miniContainer}>
            <div className={styles.iconConatiner}>
                <Image src={img} width={20} height={20} />
            </div>
            <div className={styles.txt}>
                {title} 
            </div>
        </div>
    </div>
  )
}

export default MiniGrid