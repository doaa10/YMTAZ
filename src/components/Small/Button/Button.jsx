import React from 'react'
import styles from './Button.module.css'
const Button = ({text, logo,primary}) => {
  return (
    <div className={styles.ButtonCopmpnent}>
        <button className={primary ? styles.primary : styles.default}>{logo}{text}</button>
    </div>
  )
}

export default Button
