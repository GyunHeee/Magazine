import React from 'react';
import { readDatabase } from '../api/firebase';

export default function PostCard({ post }) {
  const { id, image, category, title, description } = post;
  return (
    <li>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </li>
  );
}
