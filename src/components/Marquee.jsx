import React from 'react';

const Marquee = ({ imagesUrl }) => {
  return (
    <div className='flex py-5 gap-28 overflow-hidden items-center '>
      {imagesUrl.map((url,id)=> <img src={url} key={id} alt="images" className='flex-shrink-0 w-28' />)}
    </div>
  );
};

export default Marquee;