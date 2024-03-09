import React from 'react'
import styles from './Service.module.css'
import Box from '@/components/Small/Box/Box'
import Grid from '../Grid/Grid'
import MultiGrid from '../MultiGrid/MultiGrid'
const Service = ({title,showActiveBox,data,isSingle}) => {
    const activeIndex = 0; 
    const miniGrid=4;
  
        return (

    <div className={styles.ServiceComponent}>
        <div className={styles.ServiceContainer}>
            <div className={styles.mainTitle}>
                <span> {title}</span>
            </div>
            <div className={styles.GridContaner}>
                <Grid data={data} activeIndex={showActiveBox ? activeIndex : -1}/>
                {
                    isSingle &&
                    Array.from({ length: miniGrid }).map((_, index) => (
                        <MultiGrid key={index}   />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Service