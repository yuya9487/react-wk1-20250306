function Container() {
    return (
        <container>
            <div className="main_block">
                <div className="main_background main">
                    <div className="main_words">
                        <p className="redline"></p>
                        <p className="H1">ROCK YOUR LIFE<br />with <span className="H1 RedWord">ONE OK ROCK</span></p>
                        <img className="ROCK_pic" src="img/ROCK.png" />
                    </div>
                </div>
            </div>


            <div className="title_place" id="NEWSpart">
                <p className="title H2">NEWS</p>
            </div>


            <div className="part1">
                <img className="album_pic" src="img/專輯.jpg" />
                <div className="album_block">
                    <p className="H1">NEW ALBUM</p>
                    <p className="T1">第十章專輯《Luxury Disease》現正發行中！</p>
                    <a href="https://oor.lnk.to/LDJAW" className="p1_RM T1">read more {'>'}</a>
                </div>
            </div>

            <div className="part2">
                <div className="p2_box">
                    <p className="H2 p2_word">Luxury Disease Asia Tour 2023 巡迴中</p>
                    <img className="tour_pic" src="img/TOUR.png" />
                    <a href="https://www.oneokrock.com/en/tour/" className="p2_RM T1">read more {'>'}</a>
                </div>
            </div>

            <div className="part3">
                <div className="title_place">
                    <p className="title_MV H2">POPULAR MV</p>
                </div>
                <div className="MV_blocks">
                    <div className="MV1 MV_box">
                        <img className="MV_pic" src="img/The Beginning.jpg" />
                        <p className="songname T1">The Beginning</p>
                        <a href="https://youtu.be/Hh9yZWeTmVM?si=fS5vVh0vh7Ihh0zU" className="watchnow T1">watch now {'>'}</a>
                    </div>

                    <div className="MV2 MV_box">
                        <img className="MV_pic" src="img/Clock Strikes.jpg" />
                        <p className="songname T1">Clock Strikes</p>
                        <a href="https://youtu.be/6YZlFdTIdzM?si=uYpUqqeny83Vu2NL" className="watchnow T1">watch now {'>'}</a>
                    </div>

                    <div className="MV3 MV_box">
                        <img className="MV_pic" src="img/完全感覚Dreamer.png" />
                        <p className="songname T1">完全感覚Dreamer</p>
                        <a href="https://youtu.be/NWDAjOsTYC8?si=hP870FmyuMtPI-bc" className="watchnow T1">watch now {'>'}</a>
                    </div>
                </div>
                <div className="morevedio_place">
                    <button className="morevedio T1_B" type="button">
                        <a className="a" href="https://www.youtube.com/@ONEOKROCK/releases">MORE VIDEO {'>'}</a>
                    </button>
                </div>
            </div>
        </container>
    );

}

export default Container;