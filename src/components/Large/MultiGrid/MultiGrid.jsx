import React from 'react'
import styles from './MultiGrid.module.css'
import MiniGrid from '@/components/Small/MiniGrid/MiniGrid'
import { MiniData } from "@/data/MiniDataGrid";
const MultiGrid = () => {
 
  return (
    
    <div className={styles.MultiGrid}>

       <div className={styles.multiContainer}>
                {
                    MiniData.map((item)=>{
                        return<MiniGrid title={item.title} img={item.img} key={item.id}/>
                    })
                }
    
            </div>
       
       
    </div>
  )
}

export default MultiGrid