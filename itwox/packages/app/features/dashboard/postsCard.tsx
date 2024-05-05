'use client'

import { useState } from 'react'
import Image from 'next/image'
//import { useSession } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation'

export function PostCard(post) {
  //const { data: session } = useSession();
  const pathName = usePathname()
  const router = useRouter()
  console.log(post)
  const [copied, setCopied] = useState('')

  //const handleProfileClick = () => {
  // console.log(post);

  //   if (post.creator._id === session?.user.id) return router.push("/profile");

  //router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  //};

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.post.id}</h3>
            <p className="font-inter text-sm text-gray-500">{post.post.userId}</p>
          </div>
        </div>

        <div className="copy_btn">
          <p> {post.post.title} </p>
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.post.body}</p>
    </div>
  )
}

//export default ComentCard
