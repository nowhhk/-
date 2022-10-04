import React, { memo } from 'react';

const Avatar = memo(({ url, name }) => (
  <>
    {!!url ? (
      <img
        src={url}
        alt="avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
    ) : (
      <div className="w-10 h-10 leading-10 px-4 rounded-full bg-grey text-white flex justify-center items-center ">
        {name.charAt(0)}
      </div>
    )}
  </>
));

export default Avatar;
