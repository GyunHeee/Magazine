import React, { useState } from 'react';
import { addNewPost } from '../api/firebase';
import { upload } from '../api/upload';

export default function NewPost() {
  const [post, setPost] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { value, name, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    upload(file).then((url) => {
      console.log(url);
      console.log(post);
      addNewPost(post, url);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        name="file"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="제목"
        name="title"
        required
        // value={post.title ?? ''}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="카테고리"
        name="category"
        required
        // value={post.category ?? ''}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        required
        // value={post.description ?? ''}
        onChange={handleChange}
      />
      <button>등록하기</button>
    </form>
  );
}
