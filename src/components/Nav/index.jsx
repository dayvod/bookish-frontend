import React from 'react';
import SearchField from '../SearchField';
import Logo from '../Svg/Logo';
import styles from './nav.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.nav__logo} />
      <SearchField hasLabel={false} className={styles.nav__searchField} />
    </nav>
  );
}

export default Nav;
