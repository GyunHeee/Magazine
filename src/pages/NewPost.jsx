import React from 'react';

export default function NewPost() {
  const handleChange = (e) => {};

  return (
    <form>
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
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="카테고리"
        name="category"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        required
        onChange={handleChange}
      />
    </form>
  );
}
