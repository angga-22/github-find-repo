import React from "react";
import "./style.css"
interface Props {
  reposPerPage: number;
  totalRepos: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}
const Pagination: React.FC<Props> = ({
  reposPerPage,
  totalRepos,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <a
              onClick={() => {
                setCurrentPage(number);
              }}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
