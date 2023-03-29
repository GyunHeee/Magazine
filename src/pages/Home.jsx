import React from 'react';
import Banner from '../components/Banner';
import { useQuery } from '@tanstack/react-query';
import { readDatabase } from '../api/firebase';
import PostCard from '../components/PostCard';

export default function Home() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(['posts'], () => readDatabase());

  return (
    <div className="pt-9">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Banner />
      <div>
        <p className="mx-4 mt-2 text-2xl font-semibold">Editor's pick</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
          {posts &&
            posts.map(
              (post) => post.pick && <PostCard key={post.id} post={post} />
            )}
        </ul>
      </div>
    </div>
  );
}
