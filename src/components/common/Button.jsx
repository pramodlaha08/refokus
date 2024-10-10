import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div>
          <div className='min-w-40 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-between'>
              <span className='font-medium text-sm'>Get Started</span>
              <FaArrowRight />
      </div>
    </div>
  );
};

export default Button;