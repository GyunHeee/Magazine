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
    <div className="pt-12">
      <h1 className="bg-zinc-900  text-3xl p-7 text-gray-50">Event</h1>
      <h2 className="text-xl p-3 mx-4 font-semibold border-b-2 border-gray-500">
        Current Event
      </h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {posts &&
          posts.map(
            (post) =>
              post.category === 'event' && (
                <PostCard key={post.id} post={post} />
              )
          )}
      </ul>
    </div>
  );
}
