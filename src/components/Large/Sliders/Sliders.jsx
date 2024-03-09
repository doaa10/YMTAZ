'use client';
import React, { useState } from 'react';
import SingleRect from '@/components/Small/SingleRect/SingleRect';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import styles from './Sliders.module.css';
import SingleCircle from '@/components/Small/singleCircle/SingleCircle';
import { galleryData } from '@/data/galleryData';
import { imgs } from '@/data/Imgs';
const Sliders = ({title,compnent}) => {

 

  
  const [currentPage, setCurrentPage] = useState(0);


  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 0 : prevPage + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? 1 : prevPage - 1));
  };

  return (
    <div className={styles.Sliders}>
      <div className={styles.SliderContainer}>
        <div className={styles.SiderTxt}>
          <h1>{title}</h1>
        </div>
        <div className={styles.singleItem}>

            {
                 compnent=='single rect' ?
                 galleryData
                 .slice(currentPage * 4, currentPage * 4 + 4)
                 .map((item) => (
                    <SingleRect key={item.id} data={item} />
                 ))
                 :imgs
                 .slice(currentPage * 4, currentPage * 4 + 4)
                 .map((item) => (
                    <SingleCircle key={item.id}img={item.imageUrl}/>
                 )) 
            }
          
        </div>
        <div className={styles.circles}>
          {[...Array(2)].map((_, index) => (
            <span
              key={index}
              className={`${styles.circle} ${
                currentPage === index ? styles.active : ''
              }`}
            />
          ))}
        </div>
      </div>

      <a className={styles.prev} onClick={handlePrev}>
        <GrFormPrevious color='#2C4768' size={30} />
      </a>
      <a className={styles.next} onClick={handleNext}>
        <GrFormNext color='#2C4768' size={30} />
      </a>
    </div>
  );
};

export default Sliders;
