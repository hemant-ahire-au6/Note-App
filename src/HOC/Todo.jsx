import React from "react";
import '../App.css';
import BlogForm from "../component/BlogForm";
import PostList from '../component/PostList';

const Todo = () => {
  return (
    <div className="App">
      <BlogForm />
      <hr />
      <PostList />
    </div>
  );
};


export default Todo;