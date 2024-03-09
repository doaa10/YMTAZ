import React from 'react'
import styles from './SingleCircle.module.css'
const SingleCircle = ({img}) => {
    
  return (
    
        <div className={styles.SingleCircle}>
        <div className={styles.CircleContainer}>
            <div className={styles.circleImg}>
                <img src={img} alt='logo'></img>
            </div>
            
        </div>
    </div>
   
  )
}

export default SingleCircle