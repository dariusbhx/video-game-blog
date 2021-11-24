import Image from "next/image";
import React from 'react'
import styles from './Post.module.scss'
interface Post{
  id: string,
  description: string,
  title: string,
  image: string
}
function Post({id,description,title,image}: Post) {
  return (
    <li key = {id} className ={styles.card}>
      <div>
        <Image src={image} width ={240} height ={240} alt ="image of game" />
      </div>
      
        <h3>{title}</h3>
        <p>{description}</p>
      
      <div>
        <button>Show Details</button>
      </div>
    </li>
  );
}

export default Post;
