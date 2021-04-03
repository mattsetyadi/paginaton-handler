import React from 'react';

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  nextPage,
  previousPage,
  totalPage,
}) => {
  const pageNumbers = [];

  // handle or create pagination on front end without pagination from backend
  //   we can use this algorthm in another case for pagination
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {totalPosts > 100 ? (
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li className='page-item' onClick={previousPage}>
              <a className='page-link' href='#!'>
                Previous
              </a>
            </li>
            <li className='page-item'>
              <p className='page-link'>{currentPage}</p>
            </li>
            <li className='page-item'>
              <p className='page-link'> from </p>
            </li>
            <li className='page-item'>
              <p className='page-link' href='#!'>
                {totalPage}
              </p>
            </li>
            <li className='page-item' onClick={nextPage}>
              <a className='page-link' href='#!'>
                Next
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <ul className='pagination'>
            {pageNumbers.map((number) => (
              <li className='page-item' key={number}>
                <a
                  href='#!'
                  className='page-link'
                  onClick={() => paginate(number)}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Pagination;
