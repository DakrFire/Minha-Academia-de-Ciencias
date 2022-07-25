import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/Post.module.css"

const Post = ({post}) => {

    return (
        <div className={styles.container}>

            <Image
                src={post.frontMatter.thumbnailUrl}
                className={styles.image}
                alt="thumbnail"
                width={400}
                height={300}
                objectFit="cover"
            />
            
            <h2 className={styles.date}>{post.frontMatter.date}</h2>
            <h1 className={styles.title}>{post.frontMatter.title}</h1>
            <p className={styles.excerpt}>{post.frontMatter.description}</p>
            <Link href={'/blog/' + post.slug} passHref className={styles.link}>
                <a className={styles.read}>Leia Mais</a>
            </Link>

        </div>
    )
}

export default Post;