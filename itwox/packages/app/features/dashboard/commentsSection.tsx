import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CommentSpace } from './commentsSpace'
import { Table } from 'react-bootstrap'

const CommentsSectionList = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      <Table className="striped bordered hover">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.map((comment) => (
            <CommentSpace comment={comment} key={comment.id}></CommentSpace>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export function CommentsList() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data)
        setComments(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchComments()
  }, []) // Se ejecuta una vez al montar el componente

  return (
    <>
      <CommentsSectionList data={comments}> </CommentsSectionList>
    </>
  )
}
