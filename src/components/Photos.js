import React from 'react';

const Photos = ({ photos, loading }) => {
  if (loading) {
    return <h2 className='text-secondary mt-4 mb-4'>Loading...</h2>;
  }

  return (
    <div className='card-wrapper mt-5 '>
      {photos.map((photo) => (
        <div
          className='card my-3 mx-4 '
          style={{ width: '18rem' }}
          key={photo.id}
        >
          <img className='card-img-top' src={photo.url} alt='Photos card' />
          <div className='card-body'>
            <p className='card-text'>{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
