import React from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './styles.scss';

function SearchField() {
  return (
    <section className={styles.searchField}>
      <TextField
        labelText="Search"
        inputId="search-field"
        inputType="text"
        placeholder="Search for a book by book name, author, or isbn"
        message=""
        hasError={false}
      />
      <Button
        text="search"
        type="button"
      />
    </section>
  );
}

export default SearchField;
