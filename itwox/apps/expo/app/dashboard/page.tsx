import { NavigationBar } from 'app/features/home/navBar'
import { PostsList } from 'app/features/dashboard/postList'
import { CommentsList } from 'app/features/dashboard/commentsSection'

export default function () {
  return (
    <>
      <NavigationBar></NavigationBar>
      <PostsList></PostsList>
      <CommentsList></CommentsList>
    </>
  )
}
