
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'

import styles from "../styles/Index.module.css"
import Image from 'next/image'

const Home = ({ posts }) => {
  return (
    <div>
      <div className={styles.container}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home