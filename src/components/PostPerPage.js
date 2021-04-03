import React from 'react';

const PostPerPage = ({ postsPerPage, sizePerPage }) => {
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <label className='input-group-text' htmlFor='inputGroupSelect01'>
          Post Per Page
        </label>
      </div>
      <select
        className='custom-select'
        value={postsPerPage}
        onChange={sizePerPage}
        id='inputGroupSelect01'
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
        <option value='50'>50</option>
        <option value='60'>60</option>
        <option value='70'>70</option>
        <option value='80'>80</option>
        <option value='90'>90</option>
        <option value='100'>100</option>
      </select>
    </div>
  );
};

export default PostPerPage;
