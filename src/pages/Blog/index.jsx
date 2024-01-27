import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogList } from '../../Config/data';
import Chip from '../../components/Common/Chip';
import EmptyList from '../../components/Common/EmptyList';
import './style.css'

const Blog = () => {
   const {id}=useParams();
   const [blog, setBlog] = useState(null)

   useEffect(()=>{
    let blog=blogList.find(blog=>blog.id===parseInt(id))

    if(blog){
      setBlog(blog);
    }
   },[])
  return (
    <div>
      <Link to='/'>
        <span>←</span>Go Back
        </Link>

        {
          blog? (<div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className="blog-subCategory">
                {blog.subCategory.map((category,index)=><div><Chip key={index} label={category}/></div>)}
              </div>
            </header>
            <img src={blog.cover} alt="cover" />
            <p className='blog-description'>{blog.description}</p>
          </div>
          ) : (
            <EmptyList/>
          )}
    </div>
  )
}

export default Blog
