import axios from 'axios'
import React, {useState, useEffect} from 'react'
import GetMeme from './GetMeme'
import Navbar from './Navbar';

const Home = () => {
    const [memes, setMemes] = useState([])

    useEffect(()=>{
        asyncMeme()
    },[])
    
    async function asyncMeme(){
        const response = await axios.get('https://api.imgflip.com/get_memes')
        const data = await response.data.data.memes
        console.log(data)
        setMemes(data)
    }

  return (
    <div className="App">
      <h1>Get your favourite Meme Template</h1>
      <Navbar memes={memes} />
      <GetMeme memes={memes}/>
    </div>
  );
}

export default Home
