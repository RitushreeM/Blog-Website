import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Chip from '../../../Common/Chip'

const BlogItem = ({blog:{id,description,title,createdAt,authorName,authorAvatar,category,cover}}) => (
    <div className='blogItem-wrap'>
      <Link to={`/blog/${id}`}><img src={cover} alt="cover" className=' blogItem-cover' /></Link>
      <div className='category'><Chip label={category}/></div>
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>

        <div className="blogItem-author">

          <img src={authorAvatar} alt="" />

          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>

        </div>
      </footer>

    </div>
  )


export default BlogItem
