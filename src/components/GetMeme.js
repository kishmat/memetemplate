import React from 'react'
import './GetMeme.css'

const GetMeme = ({memes}) => {
   
    const memeDisplay = (
        memes.map(meme=>
            <div className="card">
                <img className="image" src={meme.url} alt="Avatar" style={{width:"70%", height:"270px"}} ></img>
                    <h4 className="text-center"><b>{meme.name}</b></h4>
                    <a href={`https://imgflip.com/memegenerator/${meme.id}`} className="btn btn-primary m-5">Create Meme </a>
                
                </div>
            )
    )

    return(
        <div className="allcard">            
        { 
            memeDisplay
        }
        </div> 
    )  
    
}

export default GetMeme
