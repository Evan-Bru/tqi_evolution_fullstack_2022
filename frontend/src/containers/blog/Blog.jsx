import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="alexandria__blog section__padding" id="blog">
    <div className="alexandria__blog-heading">
      <h1 className="gradient__text">A lot has happening, <br /> Come know more about it</h1>
    </div>
    <div className="alexandria__blog-container">
      <div className="alexandria__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 03, 2022" text="How the Book's Invention Shaped the Civilization as We Know?" />
      </div>
      <div className="alexandria__blog-container_groupB">
        <Article imgUrl={blog02} date="Aug 06, 2022" text="Bibliotheca Alexandria launches website to teach hieroglyphics" />
        <Article imgUrl={blog03} date="Aug 15, 2022" text="Bibliotheca Alexandrina Inaugurates Annual Book Fair" />
        <Article imgUrl={blog04} date="Aug 18, 2022" text="Editors' Choice : What Should I Read Right Now?" />
        <Article imgUrl={blog05} date="Aug 20, 2022" text="Best-Seller Lists and The Most Wanted Books in the World." />
      </div>
    </div>
  </div>
);

export default Blog;