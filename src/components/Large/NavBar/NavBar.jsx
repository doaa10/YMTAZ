'use client'
import React, { useState } from 'react'
import styles from './NavBar.module.css'
import NavLinks from './NavLinks'
import { RxHamburgerMenu } from "react-icons/rx";

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
          <img src='/images/logopng 1.png' alt="logo" />
        </div>
        </div>

    </div>
  )
}

export default NavBar