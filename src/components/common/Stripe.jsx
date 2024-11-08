import React from 'react';

const Stripe = ({val}) => {
  return (
    <div className='w-full px-10 py-5 border-y-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center'>
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  );
};

export default Stripe;