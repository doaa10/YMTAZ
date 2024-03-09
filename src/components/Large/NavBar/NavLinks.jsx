import React from 'react'
import styles from './NavBar.module.css'
import { Links } from './Links'
import { usePathname } from 'next/navigation'
const NavLinks = () => {
    const pathName= usePathname()
  return (
    <div className={styles.links}>
        {
            Links.map((link)=>{
                return <ul key={link.id}>
                    <li className={pathName === link.path ? styles.activeLink : styles.other}>
                        <a href={link.path}>{link.title}</a>
                    </li>

                </ul>
            })
        }

    </div>
  )
}

export default NavLinks