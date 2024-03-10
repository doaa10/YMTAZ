'use client'
import React, { useState } from 'react'
import styles from './NavBar.module.css'
import NavLinks from './NavLinks'
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <div className={styles.NavBar}>
        <div className={styles.NavBarContainer}>
        <div className={styles.NavBarMenu} onClick={toggleMenu}>
                <RxHamburgerMenu size={25}/>
            </div>
           
            <div className={`${styles.NavBarLinks} ${showMenu && styles.show}`}>
          <NavLinks />
        </div>

        <div className={`${styles.NavBarLogo} ${showMenu && styles.show}`}>
          <Image className={styles.img}src='/images/logopng 1.png' alt="logo"  height={67}width={138.28}/>
        </div>
        </div>

    </div>
  )
}

export default NavBar