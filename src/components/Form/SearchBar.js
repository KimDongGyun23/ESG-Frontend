import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
  margin-left: auto;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  outline: none;
  box-sizing: border-box;
  font-size: 1.4rem;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 0.5rem;
`;

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="관심 있는 검색어를 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon onClick={onSearch}>
        {/* 돋보기 아이콘 */}
        <i className="fas fa-search"></i>
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBar;
