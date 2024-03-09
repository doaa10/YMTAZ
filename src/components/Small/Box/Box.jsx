import React from 'react'
import styles from './Box.module.css'
import { PiPencilSimpleLineFill } from "react-icons/pi";

const Box = ({first,title,context,icon}) => {
  return (
           <div className={ `${styles.Box} ${first ? styles.activeBox :styles.Box}`}>

           <div  className={ `${styles.BoxIcon} ${first ? styles.activeIcon :styles.BoxIcon}`}>
                           {icon}
               </div>
               <div className={ `${styles.BoxTitle} ${first ? styles.activeTitle :styles.BoxTitle}`}>
                   <span>{title}</span>
               </div>
               <div className={ `${styles.BoxContext} ${first ? styles.activeTitle :styles.BoxContext}`}>
               <span> {context}</span>
               </div>
         
            </div>
 
 
  )
}

export default Box