import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const SearchContainer = styled.label`
  background-color: hsl(209, 23%, 22%);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  box-shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
  width: 100%;
  margin: 2rem 0 0 3rem;
  width: 280px;

  color: hsl(0, 0%, 100%);
`;

const InputSearch = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a post...',
})`
  margin-left: 2rem;
  border: none;
  background-color: hsl(209, 23%, 22%);
  color: hsl(200, 15%, 8%);
  color: hsl(0, 0%, 100%);
`;

const debounce = (fn, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, ...args);
  };
};

export const Search = ({ setSearchPhrase }) => {
  const [search, setSearch] = useState('');

  const debounceSearch = useRef(debounce(setSearchPhrase, 2000)).current;

  return (
    <SearchContainer>
      <IoSearch />
      <InputSearch
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          debounceSearch(e.target.value);
        }}
      />
    </SearchContainer>
  );
};

Search.propTypes = {
  setSearchPhrase: PropTypes.func.isRequired,
};
