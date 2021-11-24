import styles from "./ItemsFeed.module.scss";
import Post from '../Posts'
import React from 'react'



function ItemsFeed(props) {

  return (
    <div className ={styles.container}>
 `   <ul className={styles.main}>
        {props.reviews.map((post ) => (
            <Post key ={post.id} id = {post.id} description = {post.description} title ={post.title}  image ={post.image}/>

        ))}
        <h1>SOme text</h1>
    </ul>`
    </div>
  );
}

export default ItemsFeed;
