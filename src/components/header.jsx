import Logo from "../assets/logo.png"

function Header () {

    return(
        <header>
            <img src={Logo} width="100px" height="100px" alt="logo" loading="lazy"/>
            <h1>Game <br/> Masters</h1>
        </header>
    );
};

export default Header;