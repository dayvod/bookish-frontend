import React from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './styles.scss';
import SearchIcon from '../Svg/SearchIcon';

function SearchField({ hasLabel, className }) {
  return (
    <form className={`${styles.searchField} ${className || ''}`} method="GET">
      <TextField
        labelText="Search"
        inputId="search-field"
        inputType="text"
        placeholder="Search for books by name, author, or isbn"
        message=""
        hasError={false}
        hasLabel={hasLabel}
      />
      <Button
        text={<SearchIcon className={styles.searchField__icon} />}
        type="button"
        className={styles.searchField__btn}
      />
    </form>
  );
}

export default SearchField;
