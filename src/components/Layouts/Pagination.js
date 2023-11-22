// Pagenation.js

import React from "react";
import { styled } from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: #0291db;
  .page-btn {
    font-size: 1.2rem;
    margin: 0 3rem 0 0;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border: 1px solid #0291db;
    border-radius: 1rem;
    transition: background-color 0.3s, color 0.3s;
    padding: 0.5rem 1rem;
    &:hover {
      background-color: #0291db;
      color: #fff;
    }
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];

    // 처음으로 가기 버튼
    buttons.push(
      <div key="first" className="page-btn" onClick={() => onPageChange(1)}>
        처음
      </div>
    );

    // 이전 페이지 버튼
    if (currentPage > 1) {
      buttons.push(
        <div
          key="prev"
          className="page-btn"
          onClick={() => onPageChange(currentPage - 1)}
        >
          이전
        </div>
      );
    }

    // 현재 페이지 버튼
    buttons.push(
      <div
        key={currentPage}
        className={`page-btn active`}
        onClick={() => onPageChange(currentPage)}
      >
        {currentPage}
      </div>
    );

    // 다음 페이지 버튼
    if (currentPage < totalPages) {
      buttons.push(
        <div
          key="next"
          className="page-btn"
          onClick={() => onPageChange(currentPage + 1)}
        >
          다음
        </div>
      );
    }

    // 마지막으로 가기 버튼
    buttons.push(
      <div
        key="last"
        className="page-btn"
        onClick={() => onPageChange(totalPages)}
      >
        마지막
      </div>
    );

    return buttons;
  };

  return <PaginationWrapper>{renderPaginationButtons()}</PaginationWrapper>;
};

export default Pagination;
