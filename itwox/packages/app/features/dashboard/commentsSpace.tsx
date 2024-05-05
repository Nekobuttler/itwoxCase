'use client'

import { useState } from 'react'
import Image from 'next/image'
//import { useSession } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation'

export function CommentSpace(comment) {
  //const { data: session } = useSession();
  const pathName = usePathname()
  const router = useRouter()
  console.log(comment)
  const [copied, setCopied] = useState('')
  //const handleProfileClick = () => {
  // console.log(post);

  //   if (post.creator._id === session?.user.id) return router.push("/profile");

  //router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  //};

  return (
    <tr>
      <td> {comment.comment.id}</td>
      <td>{comment.comment.postId}</td>
      <td>{comment.comment.name}</td>
      <td>{comment.comment.body}</td>
      <td>{comment.comment.email}</td>
    </tr>
  )
}

//export default ComentCard
