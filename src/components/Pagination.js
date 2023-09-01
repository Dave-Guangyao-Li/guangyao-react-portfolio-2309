// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <ul className="pagination">
//             {pageNumbers.map((page) => (
//                 <li key={page} className={page === currentPage ? 'active' : ''}>
//                     <button onClick={() => onPageChange(page)}>{page}</button>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ itemsPerPage, totalPages, currentPage, onPageChange }) => {
    // const totalPages = Math.ceil(totalItems / itemsPerPage);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {!isFirstPage && (
                    <li className="page-item">
                        <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                            &lt; Back
                        </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li className={`page-item ${number === currentPage ? 'active' : ''}`} key={number}>
                        <button className="page-link" onClick={() => onPageChange(number)}>
                            {number}
                        </button>
                    </li>
                ))}
                {!isLastPage && (
                    <li className="page-item">
                        <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                            Next &gt;
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;

