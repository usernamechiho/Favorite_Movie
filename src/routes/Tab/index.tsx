import styles from './tab.module.scss'
import { NavLink } from 'react-router-dom'
import { cx } from 'styles'

import { NavSearchIcon, FavoriteStarIcon } from 'assets/svgs'

const Tab = () => {
  return (
    <nav className={styles.footerNav}>
      <ul className={styles.footerNavUl}>
        <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
          <li>
            <NavSearchIcon className={styles.navIcon} />
            검색
          </li>
        </NavLink>
        <NavLink to='favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
          <li>
            <FavoriteStarIcon className={styles.navIcon} />
            즐겨찾기
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Tab
