import React, { useState } from 'react'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar'
import BlogList from '../../components/Home/BlogList'
import { blogList } from '../../Config/data'
import EmptyList from '../../components/Common/EmptyList'


const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchSubmit=event=>{
    event.preventDefault();
    handleSearchResults()
  }

  const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filteredBlogs = allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs)
  }

  const handleClearSearch=()=>{
    setBlogs(blogList);
    setSearchKey('')
  }
  return (
    <div>
      {/* Header */}
      <Header/>

      {/* Search Bar */}
      <SearchBar 
      value={searchKey} 
      clearSearch={handleClearSearch}
      formSubmit={handleSearchSubmit}
      handleSearchKey={(e)=>setSearchKey(e.target.value)}/>

      {/* Blog List and Empty List */}
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home
