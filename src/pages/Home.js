import React from 'react' ;
import {GrApps} from "react-icons/gr" ;
import {RxAvatar} from "react-icons/rx";
import "./Home.css" ;
import Search from './Search';

const Home = () => {
  return (
    <div className='home'>
      <div className="home__header">
        <div className="home__headerLeft">
                <p>About</p>
                <p>Store</p>
        </div>

        <div className="home__headerRight">
                <p>Gmail</p>
                <p>Images</p>
                <GrApps className='apps'/>
                <RxAvatar className='avatar' />
        </div>
      </div>

      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />

        <div className="home__inputContainer">
            <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
