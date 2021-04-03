import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post, index) => (
        <li className='list-group-item' key={post.id}>
          {index + 1}. {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
