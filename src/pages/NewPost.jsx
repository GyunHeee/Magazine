import React, { useState } from 'react';
import { addNewPost } from '../api/firebase';
import { upload } from '../api/upload';

export default function NewPost() {
  const [post, setPost] = useState({});
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();

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
    setIsLoading(true);
    upload(file)
      .then((url) => {
        console.log(url);
        console.log(post);
        addNewPost(post, url).then(() => {
          setSuccess('post를 등록하였습니다❗️');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="w-full text-center p-12 max-w-4xl m-auto">
      <h1 className="text-3xl font-bold py-2 mb-2 my-12">New Post</h1>
      {success && <p className="text-xl font-bold my-2">{success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="file"
        />
      )}
      <form className="flex flex-col px-2" onSubmit={handleSubmit}>
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
        <button disabled={isLoading} className="mb-2 bg-slate-400">
          {isLoading ? '업로드중...' : '등록하기'}
        </button>
      </form>
    </section>
  );
}
