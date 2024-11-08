import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Button = ({title}) => {
  return (
    <div>
          <div className='min-w-40 w-fit px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-between'>
              <span className='font-medium text-sm'>{title}</span>
              <FaArrowRight />
      </div>
    </div>
  );
};

export default Button;