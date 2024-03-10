import React from 'react'
import styles from './SingleCircle.module.css'
import Image from 'next/image'
const SingleCircle = ({img}) => {
    
  return (
    
        <div className={styles.SingleCircle}>
        <div className={styles.CircleContainer}>
            <div className={styles.circleImg}>
                <Image src={img} width={184.44} height={60}/>
            </div>
            
        </div>
    </div>
   
  )
}

export default SingleCircle