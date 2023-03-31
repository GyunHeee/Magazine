import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PostDetail() {
  const location = useLocation();
  const { id, image, category, title, description } = location.state;
  return (
    <section className="pt-12 w-full h-full md:flex-row">
      <h1 className="bg-zinc-900  text-3xl p-7 text-gray-50">{category}</h1>
      <div className="flex justify-between items-center h-full max-w-6xl m-auto">
        <img className="w-2/6 ml-12" src={image} alt={title} />
        <div className="mx-2 p-2 mr-12">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
