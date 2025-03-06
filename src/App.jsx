import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <title className="title">10969 FANPAGE</title>
        <header className="header">
            <img className="logo" src="img/黑LOGO.png"/>
            <nav>
                <ul className="T1_B nav">
                    <li className="li"><p className="T1_B"><a href="#NEWSpart" className="naa news" onclick="ToNEWS()">NEWS</a></p></li>
                    <li className="li"><p className="T1_B"><a href="profile.html" className="naa profile" >PROFILE</a></p></li>
                    <li className="li"><p className="T1_B"><a href="album.html" className="naa album">ALBUM</a></p></li>
                    <li className="li"><p className="T1_B"><a href="index.html" className="naa tour">TOUR</a></p></li>
                    <li className="li"><p className="T1_B"><a href="index.html" className="naa fanclub">FAN CLUB</a></p></li>
                    <button className="LOGIN_btn T1_B" type="button">LOGIN</button>
                </ul>
            </nav>
        </header>

        <div class="main_block">
            <div class="main_background main">
                <div class="main_words">
                    <p class="redline"></p>
                    <p class="H1">ROCK YOUR LIFE<br/>with <span class="H1 RedWord">ONE OK ROCK</span></p>
                    <img class="ROCK_pic" src="img/ROCK.png"/>
                </div>
            </div>
        </div>
        
        
        <div class="title_place" id="NEWSpart">
            <p class="title H2">NEWS</p>
        </div>
        
    
        <div class="part1">
            <img class="album_pic" src="img/專輯.jpg"/>
            <div class="album_block">
                <p class="H1">NEW ALBUM</p>
                <p class="T1">第十章專輯《Luxury Disease》現正發行中！</p>
                <a href="https://oor.lnk.to/LDJAW" class="p1_RM T1">read more {'>'}</a>
            </div>
        </div>
    
        <div class="part2">
            <div class="p2_box">
                <p class="H2 p2_word">Luxury Disease Asia Tour 2023 巡迴中</p>
                <img class="tour_pic" src="img/TOUR.png"/>
                <a href="https://www.oneokrock.com/en/tour/" class="p2_RM T1">read more {'>'}</a>
            </div>
        </div>
    
        <div class="part3">
            <div class="title_place">
                <p class="title_MV H2">POPULAR MV</p>
            </div>
            <div class="MV_blocks">
                <div class="MV1 MV_box">
                    <img class="MV_pic" src="img/The Beginning.jpg"/>
                    <p class="songname T1">The Beginning</p>
                    <a href="https://youtu.be/Hh9yZWeTmVM?si=fS5vVh0vh7Ihh0zU" class="watchnow T1">watch now {'>'}</a>
                </div>
                
                <div class="MV2 MV_box">
                    <img class="MV_pic" src="img/Clock Strikes.jpg"/>
                    <p class="songname T1">Clock Strikes</p>
                    <a href="https://youtu.be/6YZlFdTIdzM?si=uYpUqqeny83Vu2NL" class="watchnow T1">watch now {'>'}</a>
                </div>
    
                <div class="MV3 MV_box">
                    <img class="MV_pic" src="img/完全感覚Dreamer.png"/>
                    <p class="songname T1">完全感覚Dreamer</p>
                    <a href="https://youtu.be/NWDAjOsTYC8?si=hP870FmyuMtPI-bc" class="watchnow T1">watch now {'>'}</a>
                </div>
            </div>
            <div class="morevedio_place">
                <button class="morevedio T1_B" type="button">
                    <a class="a" href="https://www.youtube.com/@ONEOKROCK/releases">MORE VIDEO {'>'}</a>
                </button>
            </div>
            
        </div>
    
        <footer>
            <p class="F_word T2">© 10969 UNOFFICIAL FAN CLUB, Inc.</p>
            <div class="buttons_place">
                <button type="button" class="img_btn">
                    <a href="https://www.facebook.com/ONEOKROCK"><img class="fb icon_btn" src="img/fb.png" alt="fb"/></a>
                </button>
    
                <button type="button" class="img_btn">
                    <a href="https://www.instagram.com/oneokrockofficial/"><img class="ig icon_btn" src="img/ig.png" alt="ig"/></a>
                </button>
    
                <button type="button" class="img_btn">
                    <a href="https://twitter.com/ONEOKROCK_japan"><img class="x icon_btn" src="img/x.png" alt="x"/></a>
                </button>
            </div>
        </footer>
      </div>
    </>
  )
}

export default App
