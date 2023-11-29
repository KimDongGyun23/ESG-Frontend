import React from "react";
import { styled } from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: #0291db;
  .page-btn {
    font-size: 1.5rem;
    margin: 0 0.5rem 0 0.5rem;
    cursor: pointer;
    padding: 0.5rem 0.7rem;
    border: 1px solid #0291db;
    border-radius: 1rem;
    transition: background-color 0.3s, color 0.3s;
    padding: 0.5rem 1rem;
    &:hover {
      background-color: #0291db;
      color: #fff;
    }
  }

  .active {
    background-color: #0291db;
    color: #fff;
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
          ◁
        </div>
      );
    }

    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      buttons.push(
        <div
          key={i}
          className={`page-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </div>
      );
    }

    // 다음 페이지 버튼
    if (currentPage < totalPages) {
      buttons.push(
        <div
          key="next"
          className="page-btn"
          onClick={() => onPageChange(currentPage + 1)}
        >
          ▷
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
        끝
      </div>
    );

    return buttons;
  };

  return <PaginationWrapper>{renderPaginationButtons()}</PaginationWrapper>;
};

export default Pagination;
