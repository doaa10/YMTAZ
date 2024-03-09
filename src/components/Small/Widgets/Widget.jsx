import React from 'react'
import styles from './Widget.module.css'
const Widget = ({context , tilte ,src}) => {
  return (
    <div className={styles.Widgets}>
        <div className={styles.leftImg}>
            <img src={src}></img>

        </div>
        <div className={styles.RightContext}>
            <span>{context}</span>
            <span>{tilte}</span>
        </div>
    </div>
  )
}

export default Widget