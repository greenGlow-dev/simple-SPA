import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Loading from './Loading'

import Posts from './Posts'

export default function Stuff() {

  const[posts, setPosts] = useState(null)
  const[add, setAdd] = useState(false)

  useEffect( ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((natija)=>{
      setPosts(natija.data)
  
    })},[]
  )

 const addPosts =  () => {
setAdd(!add)
 }
  return (

    <div>
      <h2>STUFF</h2>
      <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>

      </ol>
      <div className='d-flex justify-content-between'>

        <button type='button' onClick={addPosts} className='btn btn-dark '>Posts</button>
      </div>
      <br />
      <hr />
      <br />
      <div>
        {add ?   <div>{posts ? <Posts  posts = {posts} />:<Loading/>}</div>: ''}
      
      </div>
    </div>
  )
}
