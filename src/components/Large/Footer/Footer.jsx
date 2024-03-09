import React from 'react'
import styles from './Footer.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import Widget from '@/components/Small/Widgets/Widget';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { LuAlarmClock } from "react-icons/lu";


const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.footerContainer}>
            <div className={styles.topContainer}>
                    <div className={styles.rightCont}>

                        <div className={styles.logoImgs}>
                        <img src='/images/Frame1.png' alt='logo'></img>
                        <img src='/images/logopng.png' alt='logo'></img>
                        </div>

                        <div className={styles.footerContext}>
                            <span>يمتاز  هى منصة إلكترونية تعنى بالوساطه لتقديم الاستشارات والخدمات القانونية من خلال ربط نخبة من المحامين المرخصين من وزارة العدل السعودية مع طالبي الخدمات القانونية، وهي منصه مرخصه بموجب سجل تجاري رقم 1234567894.
                            </span>
                        </div>

                    </div>

                    <div className={styles.leftCont}>
                        <div className={styles.rightLinks}>
                            <div className={styles.singleLink}>
                                <IoLocationOutline size={30} color='#DDB762'/>
                                <span>السعودية (جدة - الطائف)</span>
                            </div>
                            <div className={styles.singleLink}>
                                <HiOutlineMail size={25} color='#DDB762'/>
                                <span>ymtaz@ymtaz.sa</span>
                            </div>
                        </div>
                        <div className={styles.leftLinks}>
                        <div className={styles.singleLink}>
                                <LuPhone size={25} color='#DDB762'/>
                                <span>0534337090</span>
                            </div>
                            <div className={styles.singleLink}>
                                <LuAlarmClock size={30} color='#DDB762'/>
                                <span>الأحد إلى الخميس - من 9 صباحاً حتى 5 مساءً (الخدمات الإلكترونية على مدار الساعة)</span>
                            </div>
                        </div>
                    </div>
                
            </div>
            <div className={styles.bottomContainer}>
            <div className={styles.smLinks}>
                <FaXTwitter color='#fff' size={25}/>
                <IoLogoLinkedin color='#ffff' size={25}/>
                <FaFacebook color='#ffff' size={25}/>
                </div>
                <div className={styles.footerWidgets}>
                        <Widget context='EXPLORE IT ON' tilte='AppGallery' src='/images/huw.png'/>
                        <Widget context='GET IT ON' tilte='Google Play' src='/images/google.png'/>
                        <Widget context='Download on the' tilte='AppGallery' src='/images/apple.png'/>

                </div>

            </div>


            <div className={styles.lastFooter}>
                <div className={styles.line}></div>
                <span>جميع الحقوق محفوظة لشركة أركان الطيف للإتصالات وتقنية المعلومات © 2024</span>
            </div>
        </div>
    </div>
  )
}

export default Footer