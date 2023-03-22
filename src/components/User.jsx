import React from 'react';

export default function User({ user }) {
  const { displayName, photoURL } = user;
  return (
    <div className="flex flex-col items-center mr-2">
      <img
        className="rounded-full w-10 h-10"
        src={photoURL}
        alt={displayName}
      />
      <p className="font-medium shrink-0">{displayName}</p>
    </div>
  );
}
