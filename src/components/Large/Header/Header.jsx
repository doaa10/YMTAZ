import React from 'react'
import styles from './Header.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Button from '@/components/Small/Button/Button';
import { FaApple } from "react-icons/fa6";
import Widget from '@/components/Small/Widgets/Widget';
import Image from 'next/image';


const Header = () => {
  return (
    <div className={styles.headerComponent}>
        <div className={styles.headerCotainer}>
            <div className={styles.headerSideLinks}>
                <FaXTwitter color='#fff' size={22}/>
                <IoLogoLinkedin color='#ffff' size={22}/>
                <FaFacebook color='#ffff' size={22}/>
            </div>

            <div className={styles.headerBottomContainer}>

            <div className={styles.leftImages}>
              <Image className={styles.img} src='/images/imgs.png' width={1000} height={700}/>
                    

                </div>


                <div className={styles.rightContnent}>
                    <div className={styles.topContext}>
                    <div className={styles.context} >
                        <div>
                        <h1>منصة <span>يمتاز الإلكترونيه</span></h1>
                        </div>
                        <div>
                        <span>
                        اكتشف عالماً جديداً من السهولة والأمان مع يمتاز! منصتنا الإلكترونية تقدم لك جميع الخدمات والاستشارات القانونية بأمان وسرعة
                        </span>
                        </div>

                        
                    </div>
                      <div className={styles.btns}>
                        <Button text='انشاء حساب' logo={<GoArrowUpRight/>} primary='primary'/>
                        <Button text='تسجيل دخول 'logo={<GoArrowUpRight/>}/>
                      </div>

                    </div>

                    <div className={styles.bottomWidgets}>
                        <Widget context='EXPLORE IT ON' tilte='AppGallery' src='/images/huw.png'/>
                        <Widget context='GET IT ON' tilte='Google Play' src='/images/google.png'/>
                        <Widget context='Download on the' tilte='AppGallery' src='/images/apple.png'/>


                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Header