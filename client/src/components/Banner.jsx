import React, { memo } from 'react';

const Banner = memo(({ text, isAlert }) => (
  <>
    {text && (
      <p
        className={`w-full py-3 px-8 font-bold text-sm ${
          isAlert ? 'bg-red' : 'bg-blue'
        }`}
      >
        {text}
      </p>
    )}
  </>
));
export default Banner;
