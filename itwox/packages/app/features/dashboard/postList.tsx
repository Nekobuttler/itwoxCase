import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { PostCard } from './postsCard'

const PostsCardList = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export function PostsList() {
  const [posts, setposts] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setposts(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchComments()
  }, []) // Se ejecuta una vez al montar el componente

  return (
    <>
      <PostsCardList data={posts}></PostsCardList>
    </>
  )
}
