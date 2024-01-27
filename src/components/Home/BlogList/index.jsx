import React from 'react'
import Blog from '../../../pages/Blog'
import BlogItem from './BlogItem'
import './style.css'


const BlogList = ({blogs}) => (
    <div className='bloglist-wrap'>
        {blogs.map((blog)=>(
        <BlogItem blog={blog} key={blog.id}/>
        ))}
    </div>
  )


export default BlogList
