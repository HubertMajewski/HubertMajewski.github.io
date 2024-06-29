
const Header = () => <header id="header" className="alt">
<h1 id="logo"><a href="index.html">Hubert Majewski <span>a programmer's journey</span></a></h1>
<nav id="nav">
    <ul>
        <li className="current"><a href="index.html">Home</a></li>
        <li className="submenu">
            <a href="#">Menu</a>
            <ul>
                {/* <!--<li><a href="left-sidebar.html">Left Sidebar</a></li>-->\ */}
                <li><a href="https://github.com/HubertMajewski">Projects</a></li>
                <li><a href="Contact.html">Contact</a></li>
                <li><a href="YouthLeadershipTeam.html">Youth Leadership Team</a></li>
                {/* <!--<li class="submenu">\
                    <a href="#">Submenu</a>\
                    <ul>\
                        <li><a href="#">Dolore Sed</a></li>\
                        <li><a href="#">Consequat</a></li>\
                        <li><a href="#">Lorem Magna</a></li>\
                        <li><a href="#">Sed Magna</a></li>\
                        <li><a href="#">Ipsum Nisl</a></li>\
                    </ul>\
                </li> -->\ */}
            </ul>
        </li>
        {/* <!--<li><a href="#" class="button primary">Sign Up</a></li>-->\ */}
    </ul>
</nav>
</header>

export default Header