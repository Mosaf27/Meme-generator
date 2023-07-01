'use client'

import styles from '@/app/styles/common.module.css'
import MemeCard from './components/MemeCard';
import { useState } from 'react';






const Page = () => {

  const [data, setData] = useState();
  const [showContent, setShowContent] = useState(false);
  const [style, setStyle] = useState(true);

 async function handleClick (){


    const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a12c86850msh2262886bdeaca9ap149d47jsn07a22744e5ca',
      'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
    }
  };
  

    const response = await fetch(url, options);  /* fetch data from the url */
    const data = await response.json();          /*convert the data into json format */
    setData(data);

    setShowContent(true),
    setStyle(false)
    
  }


  return (
    <section className={styles.section} style={{height:style ? '100vh' : ''}}>
      <div className={styles.container}>
      <button className={styles.button} onClick={handleClick} >
      Get Memes
      </button>
      </div>
      <div className={styles.memecontainer}>
         
   {showContent ? 
    data.map((meme) =>{
      return <MemeCard key = {meme.id} image = {meme.image}/>
    })
 : ""
  }
      </div>
    </section>
  );
}

export default Page;