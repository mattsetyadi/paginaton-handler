import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import PostPerPage from '../components/PostPerPage';

const FrontEnd = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

      setPosts(res.data);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  //   console.log(posts);

  //   get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostsPerpage = (e) => {
    setPostsPerPage(e.target.value);
  };

  return (
    <>
      <h1 className='text-primary mb-3'>Handle front end pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <PostPerPage
        postsPerPage={postsPerPage}
        sizePerPage={handlePostsPerpage}
      />
    </>
  );
};

export default FrontEnd;
