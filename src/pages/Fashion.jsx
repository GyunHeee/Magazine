import React, { useState } from 'react';
import { readDatabase } from '../api/firebase';
import PostCard from '../components/PostCard';
import { useQuery } from '@tanstack/react-query';

export default function Fashion() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(['posts'], () => readDatabase());

  readDatabase();
  return (
    <>
      <div>
        <h1 className="bg-zinc-900  text-4xl p-7 text-gray-50">Fashion</h1>
        <h2 className="text-xl p-3 mx-4 font-semibold">Fashion News</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
        </ul>
      </div>
    </>
  );
}
