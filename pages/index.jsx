import fetch from 'isomorphic-fetch'

import css from "../styles.sass"

import Layout from '../components/layout'
import Post from '../components/post'

const Page = (props) => (
  <Layout>
    {renderPosts(props.posts)}
  </Layout>
)

const renderPosts = posts => {
  const list = new Array(posts.length)
  for (let i = 0; i < list.length; i++)
    list[i] = <Post key={posts[i].id} {...posts[i]} />
  return list
}

Page.getInitialProps = async ({ req }) => {
  return { posts: await fetch('https://localhost:3000/api/posts').then(res => res.json()) }
}

export default Page
