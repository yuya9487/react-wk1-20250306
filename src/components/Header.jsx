function Header() {
    return (
        <header className="header">
            <img className="logo" src="img/黑LOGO.png" />
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
    );

}

export default Header;