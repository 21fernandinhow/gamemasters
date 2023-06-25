import Logo from "../assets/logo.png"

function Header () {

    return(
        <>
            <span id='scrolltop'></span>

            <header>
                <a href="#scrolltop">
                    <img src={Logo} width="100px" height="100px" alt="logo"/>
                    <h1>Game <br/> Masters</h1>
                </a>
            </header>
        </>
    );
};

export default Header;