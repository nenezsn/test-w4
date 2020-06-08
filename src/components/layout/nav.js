import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.less'

const Nav = function ({menu}) {
    return (
        <ul className={styles.nav_list}>
            {menu.map((item, index) => <li key={index}><Link to={item.path}>{item.title}</Link></li>)}
        </ul>
    )
}
export default Nav