import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

import { AiOutlineMore, AiOutlineSearch } from 'react-icons/ai'
import { BiNews, BiSolidMap } from 'react-icons/bi'
import { BsFillImageFill, BsFillTagFill } from 'react-icons/bs'

import "./SearchPage.css" ;
import { useStateValue } from '../StateProvider.js'
import useGoogleSearch from '../useGoogleSearch'


function SearchPage() {

  const [{term}] = useStateValue() ;

  const { data } = useGoogleSearch(term) ;
  console.log(term) ;

  return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to="/" >
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">

           <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                 <AiOutlineSearch />
                 <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <BiNews />
                <Link to="/all">News</Link>
              </div>

              <div className="searchPage__option">
                <BsFillImageFill />
                <Link to="/all">Images</Link>
              </div>

              <div className="searchPage__option">
                <BsFillTagFill />
                <Link to="/all">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <BiSolidMap />
                <Link to="/all">Maps</Link>
              </div>

              <div className="searchPage__option">
                <AiOutlineMore />
                <Link to="/all">More</Link>
              </div>
           </div>

           <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__option">
                 <Link to="/tools">Tools</Link>
              </div>
           </div>
          
          </div>
        </div>
      </div>

    {  term && (
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} )
        </p>

      {
         data?.items.map((item) => (
          <div className="searchPage__result">
          <a href={item.link} className='searchPage__resultLink'>

            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} />
            )}

            {item.displayLink}
          </a>

          <a href={item.link} className='searchPage__resultTitle'>
            <h2> {item.title} </h2>
          </a>
          <p className="searchPage__resultDescription"> {item.snippet} </p>
        </div>
       ))}
  
      </div> 
    )}


    </div>
  )
}

export default SearchPage
