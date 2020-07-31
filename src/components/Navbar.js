import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Navbar = ({memes}) => {
  const [input, setInput]  = useState('')
  
  

  const changeHandler =(e) =>{
    setInput(e.target.value)
  }

  // const searchHandler = (e) => {
  //   e.preventDefault()
  //   const required = memes.filter(meme => meme.name === input)
  //   console.log("Required : ",required);
    
    
  // }

  

  
    return (
        <div >
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Meme Template</a>
    </div>
    {/* <form className="navbar-form navbar-right mr-5" action="/action_page.php">
      <div className="form-group">
        <input type="text" value={input} className="form-control" placeholder="Name of your meme" onChange={changeHandler} name="search"/>
      </div>
      
      <button type="submit" className="btn btn-primary" onClick={searchHandler}>Search</button>
      
    </form> */}
  </div>
  </nav>
  <br></br>
  <div>
  
  </div>
  
  </div>
  
    )
}

export default Navbar
