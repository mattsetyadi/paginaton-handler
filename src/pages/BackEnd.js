import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Photos from '../components/Photos';
import Pagination from '../components/Pagination';
import PostPerPage from '../components/PostPerPage';

const BackEnd = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(10);
  const [totalPhotos, setTotalPhotos] = useState('');

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${photosPerPage}`,
      );

      setPhotos(res.data);
      setTotalPhotos(res.headers['x-total-count']);

      setLoading(false);
    };

    getPhotos();
  }, [currentPage, photosPerPage]);

  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  //   console.log(currentPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostsPerpage = (e) => {
    setPhotosPerPage(e.target.value);
    setCurrentPage(1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage === totalPages ? totalPages : currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
  };

  return (
    <>
      <h1 className='text-primary'>Handle pagination from url/api</h1>
      <Photos photos={photos} loading={loading} />
      <Pagination
        postsPerPage={photosPerPage}
        totalPosts={totalPhotos}
        paginate={paginate}
        currentPage={currentPage}
        totalPage={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      <PostPerPage
        postsPerPage={photosPerPage}
        sizePerPage={handlePostsPerpage}
      />
    </>
  );
};

export default BackEnd;
