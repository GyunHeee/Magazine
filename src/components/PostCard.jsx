import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const { id, image, category, title, description } = post;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <li onClick={handleClick} className="rounded-lg shadow-md cursor-pointer">
      <img
        className="w-full h-4/5 transition-transform duration-300 hover:scale-105 hover:shadow-slate-700"
        src={image}
        alt={title}
      />
      <p className="mt-2 font-semibold text-m">{title}</p>
      <p className=" text-sm truncate text-gray-700">{description}</p>
    </li>
  );
}
