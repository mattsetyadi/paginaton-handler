import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // handle or create pagination on front end without pagination from backend
  //   we can use this algorthm in another case for pagination
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map((number) => (
        <li className='page-item' key={number}>
          <a href='#!' className='page-link' onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
