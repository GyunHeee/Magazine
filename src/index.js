import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Fashion from './pages/Fashion';
import Life from './pages/Life';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Interior from './pages/Interior';
import Culture from './pages/Culture';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home/>},
      {path: '/new', element: <NewPost />},
      {path: '/category/fashion', element: <Fashion />},
      {path: '/category/life', element: <Life />},
      {path: '/category/interior', element: <Interior />},
      {path: '/category/culture', element: <Culture />},
      {path: '/about', element: <About />},
      {path: '/post/:id', element: <PostDetail />},
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
