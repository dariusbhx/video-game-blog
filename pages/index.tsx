import ItemsFeed from '../components/ItemsFeed'
import Navbar from '../components/Navbar'
import React from 'react'
interface IState{
  posts:{
  id: string;
  description:string;
  title: string;
  image:string
  }[]

}

const dummyData : IState["posts"] = [
  {
      id: '1',
      description: 'Some text',
      title: 'Title of the blog',
      image: 'https://lh3.googleusercontent.com/proxy/f39hXZHWl20GH8h1_eKdUoUbiA6miA1gur0NEqd7SSAXIapjoaklR_aszHmiaDpJdo1YyHVnnyOMjPArPdNm_2eLA-7V0UjEtnSXz15T8rBQfMqqerGQD9D8lxoNXMB7a1NKOxveLyGg7A'
  },
  {
      id: '2',
      description: 'Some text',
      title: 'Title of the blog',
      image: 'https://lh3.googleusercontent.com/proxy/f39hXZHWl20GH8h1_eKdUoUbiA6miA1gur0NEqd7SSAXIapjoaklR_aszHmiaDpJdo1YyHVnnyOMjPArPdNm_2eLA-7V0UjEtnSXz15T8rBQfMqqerGQD9D8lxoNXMB7a1NKOxveLyGg7A'
  },
  {
      id: '3',
      description: 'Some text',
      title: 'Title of the blog',
      image: 'https://lh3.googleusercontent.com/proxy/f39hXZHWl20GH8h1_eKdUoUbiA6miA1gur0NEqd7SSAXIapjoaklR_aszHmiaDpJdo1YyHVnnyOMjPArPdNm_2eLA-7V0UjEtnSXz15T8rBQfMqqerGQD9D8lxoNXMB7a1NKOxveLyGg7A'
  },
  {
      id: '4',
      description: 'Some text',
      title: 'Title of the blog',
      image: 'https://lh3.googleusercontent.com/proxy/f39hXZHWl20GH8h1_eKdUoUbiA6miA1gur0NEqd7SSAXIapjoaklR_aszHmiaDpJdo1YyHVnnyOMjPArPdNm_2eLA-7V0UjEtnSXz15T8rBQfMqqerGQD9D8lxoNXMB7a1NKOxveLyGg7A'
  },
]
export default function Home() {
  return (
    <div>
      <Navbar />
      <ItemsFeed  reviews = {dummyData}/>
    </div>
  )
}
