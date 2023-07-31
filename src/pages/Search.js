import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import "./Search.css";
import {useStateValue} from "../StateProvider.js"
import {actionTypes} from "../reducer" ;

function Search({hideButtons}) {

   const [{}, dispatch] = useStateValue() ;

   const [input, setInput] = useState("") ;
   const history = useNavigate() ;

   const search= (e) => {
      e.preventDefault() ;

      dispatch({
         type:actionTypes.SET_SEARCH_TERM,
         term:input
      })

      history("/search") ;
   }

  return (
    <form className='search'>
       <div className="search__input">
          <AiOutlineSearch className='searchIcon' />
          <input value={input} onChange={e=> setInput(e.target.value)} />
          <BsFillMicFill className='micIcon'/>
       </div>

      {
         !hideButtons ? (<div className="search__button">
          <button className='firstBtn' type='submit' onClick={search} >Google Search</button>
          <button className='secondBtn'>I'm Feeling Lucky</button>
       </div>)  :  (<div className="search__button" style={{display:"none"}}>
          <button className='firstBtn' type='submit' onClick={search} >Google Search</button>
       </div>)


      }

      
    </form>
  )
}

export default Search
