import React from 'react'
import styles from './SingleRect.module.css'
const SingleRect = () => {
  return (
    <div className={styles.SingleRect}>
        <div className={styles.RectComponent}>
            <div className={styles.RectImg}>
                <img src='./images/person.jpg' alt='person'></img>
            </div>
            <div className={styles.rectContext}>
                <span>أسامة علي العقيلي</span>
                <span>محامي أعمال</span>
                <span>السعوديه</span>
            </div>
        </div>
    </div>
  )
}

export default SingleRect