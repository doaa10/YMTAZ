import React from 'react'
import styles from './Widget.module.css'
import Image from 'next/image'
const Widget = ({context , tilte ,src}) => {
  return (
    <div className={styles.Widgets}>
        <div className={styles.leftImg}>
            <Image src={src} width={26} height={26} />

        </div>
        <div className={styles.RightContext}>
            <span>{context}</span>
            <span>{tilte}</span>
        </div>
    </div>
  )
}

export default Widget